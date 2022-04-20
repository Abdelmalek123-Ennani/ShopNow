import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryData } from '../../../store/catogoryData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Fade, Zoom } from "react-reveal"
import "./SingleCategorie.scss"
import { Link, NavLink } from 'react-router-dom';

const SingleCategorie = ({ category }) => {

    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.categoriesData.categoryProducts);

    useEffect(() => {
        dispatch(fetchCategoryData(category));
    } , [category])

  return (
    <div className='container-fluid mt-3'>  
       <div className='container'>
          <div className='row'>
                {
                    categoryData.map((el , idx) => (
                        <Zoom delay={idx * 200} key={el.id}>
                            <div className='col-12 col-md-3 p-5 border product mx-md-4 my-2 my-md-0 position-relative'>
                                <Link className='product-link' to={`/product/${el.id}/Card`}>
                                      <img src={el.image} className="w-100 h-100" alt="image" />
                                      <button className='btn btn-like'>
                                          <FontAwesomeIcon icon={faHeart} />
                                      </button>
                                      <p className="price">{ el.price } $</p>
                                      <p className='decription'>{el.title.substring(0 , 25)}</p>
                                  </Link>
                              </div>
                         </Zoom>
                    ))
                }
                <button className='btn btn-discover py-2'>
                     <NavLink 
                        to="/products/categories"
                        >Discover more!</NavLink>   
                  </button>
          </div>
       </div>
    </div>
  )
}

export default SingleCategorie