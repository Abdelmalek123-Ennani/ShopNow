import "./addproductocard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/catogoryData";
import { Fade } from "react-reveal";

const AddProductToCard = () => {

    
     const dispatch = useDispatch();
     const [product] = useSelector(state => state.categoriesData.categoryProducts);
     const { id } = useParams()

     const [quanity , setQuanity] = useState(1);
     const [price , setPrice] = useState(product.price);
  
     console.log(product)

     useEffect(() => {
         dispatch(getSingleProduct(id));
         window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
     } , [])


    return (
        <div className="container py-5">
            <h2 className="mb-5">{product.title}</h2>
            <div className="row">
               <div className="col-12 col-md-4 text-center">
                  <Fade left>
                    <img 
                        src={product.image} 
                        className="w-75"
                        alt="imageProduct" 
                      />
                  </Fade>
               </div>
               <div className="col-12 col-md-6 pt-4 details">
                  <Fade right>
                     
                      <p>
                          {/* to show the stars */}
                          {[...Array(parseInt(product.rating.rate))].map((x) =>  <FontAwesomeIcon icon={faStar} color='yellow' />  )}
                            ({ product.rating.count } )
                      </p>
                      <p>
                          <small>
                              { product.description }
                          </small>
                      </p>
                      <p>{ (product.price * quanity).toFixed(2) }$</p>
                      <p className="qnity_control">
                          <button 
                            className="btn btn-minus"
                            onClick={() => quanity == 0 ? setQuanity(0) : setQuanity(quanity - 1)}
                          >-</button>
                          <span className="qnty">{ quanity }</span>
                          <button 
                            className="btn btn-plus"
                            onClick={() => setQuanity(quanity + 1)}
                          >+</button>
                        </p>
                        {quanity ==  0 ? (
                            <button 
                                className='btn btn-discover py-2'
                                disabled
                            >Add to card!</button>
                        ) : (
                            <button 
                              className='btn btn-discover py-2'
                            >Add to card!</button>
                        )}
                  
                  </Fade>
               </div>
            </div>
        </div>

    )
}

export default AddProductToCard;