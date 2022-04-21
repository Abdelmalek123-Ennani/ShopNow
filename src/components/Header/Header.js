import { useState } from "react"
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose , faBars , faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {

    const [classShowHideHeader , setClassShowHideHeader] = useState('hide-header');
    const cardItemsNumber = useSelector(state => state.cardItems.cardItems.length);

    const opencloseNav = () => {
        if ( classShowHideHeader == "hide-header" ) {
            setClassShowHideHeader("show-header")
        } else {
            setClassShowHideHeader("hide-header");
        }
    }

    return (
        <header className="container-fluid">
           <div className="container p-3">
            <ul>
                <li className="logo">
                    <NavLink 
                      to="/"
                      className="header-link"
                    >FakeShop</NavLink> 
                </li>
                <ul className={classShowHideHeader}>
                    <li>
                        <NavLink 
                            to="/products/categories"
                            className={({ isActive }) =>
                                  isActive ? "borderBottom header-link" : "header-link"
                              }
                              onClick={() => setClassShowHideHeader('hide-header')}
                        >Categories</NavLink>   
                    </li>
                    <li>
                    <NavLink 
                            to="/contact"
                            className={({ isActive }) =>
                                  isActive ? "borderBottom header-link" : "header-link"
                              }
                              onClick={() => setClassShowHideHeader('hide-header')}
                        >contact</NavLink>  
                    </li>
                    <li>
                    <NavLink 
                            to="/login"
                            className={({ isActive }) =>
                                  isActive ? "borderBottom header-link" : "header-link"
                              }
                            onClick={() => setClassShowHideHeader('hide-header')}
                        >login</NavLink>  
                    </li>
                    <li className="position-relative">
                       <NavLink
                           to="/card/products"
                           className={({ isActive }) =>
                           isActive ? "borderBottom header-link cart-item-hide" : "header-link cart-item-hide"
                       }
                        >
                            <FontAwesomeIcon icon={faBagShopping} className="bag-svg-icon" />
                            <span className="position-absolute bag-number-shoping">{cardItemsNumber}</span>
                       </NavLink>
                    </li>
                </ul>
            </ul>
            <NavLink
                        to="/card/products"
                        className="header-link cart-link"
                    >
                        <FontAwesomeIcon icon={faBagShopping} className="bag-svg-icon" />
                        <span className="position-absolute bag-number-shoping">{cardItemsNumber}</span>
            </NavLink>
            <button 
                className="btn btn-open-close" 
                onClick={opencloseNav}
            >
                {classShowHideHeader == "show-header" ? <FontAwesomeIcon  icon={faClose} /> : <FontAwesomeIcon icon={faBars} />} 
            </button>
           </div>
        </header>
    ) 
}


export default Header;