
import React, { useState, useEffect } from 'react'
import "./FilterCategories.scss"
import { useDispatch , useSelector } from "react-redux"
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

import {fetchCategoryAllData} from './../../store/catogoryData'

function FilterCategories() {

    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.categoriesData.categoryProducts);
    const [category , setCategory] = useState('ALL')

    useEffect(() => {
        dispatch(fetchCategoryAllData(category));
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    } , [category])

  return (
    <div className='container-fluid my-2'>
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-4 px-0">
                    <h3>Collections</h3>
                </div>
                <div className='col-12 col-md-4 offset-md-4 px-0 d-flex justify-content-end'>
                   <select 
                     className="dropList"
                     onChange={(e) => setCategory(e.target.value)}
                   >
                       <option value="ALL">All</option>
                       <option value="men's clothing">Men's clothing</option>
                       <option value="women's clothing">Women's clothing</option>
                       <option value="jewelery">Jowelory</option>
                       <option value="electronics">Electronics</option>
                   </select>
                </div>
                {/* <div className='col-md-4'>
                     <select name="" id="">
                       <option value="">All</option>
                       <option value="">Men's clothing</option>
                       <option value="">Women's clothing</option>
                       <option value="">Jowelory</option>
                       <option value="">Electronics</option>
                     </select>
                </div> */}
            </div>
        </div>
        <div className="container">
            <div className="row">
               { categoryData.map((item , idx) => (
                    <Fade bottom delay={ idx * 50 }>
                       <div className="col-12 col-md-3 product-item mb-4 p-1">
                         <Link className='product-link' to={`/product/${item.id}/Card`}>
                                    <div className='col-12 d-flex border border-bottom-0 justify-content-center align-items-center p-4 pb-0 h-85'>
                                        <img src={item.image} alt="productImahe" className="w-100" />
                                    </div>
                                    <div className='p-1 m-0 product-details border border-top-0'>
                                        <h6>{item.category}</h6>
                                        <p className='text-muted'>
                                        <small>
                                            { item.title.slice(0 , 20) }
                                        </small>
                                        </p>
                                    </div>
                                 </Link>
                         </div>
                    </Fade>
               )) }
            </div>
        </div>
    </div>
  )
}

export default FilterCategories