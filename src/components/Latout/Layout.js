import './layout.scss'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getImageForLayOut } from './../../store/LayoutImages'
import { Fade  } from 'react-reveal'
import { NavLink } from 'react-router-dom'

const Layout = () => {

   const dispatch = useDispatch();
   const layoutImages = useSelector(state => state.layouImages.images);
   
   useEffect(() =>  {
        // dispatch the thunk to fetch data
       dispatch(getImageForLayOut())
   } , [])


   console.log(layoutImages)
   return (
       <div className='container-fluid layout'>
         
         <div className='container h-100'>
            <div className='row h-100'>
               <div className='col-12 col-md-6 h-100 slogan'>
                  <div>
                     <h1>New Clothes, New Passion.</h1>
                     <h3>Do well, Dress really well</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Porro deserunt, tempore iure exercitationem delectus assumenda 
                      quis magni necessitatibus unde, nostrum perspiciatis facere beatae 
                      vel ipsa omnis, fugit eum labore a!</p>
                  <button className='btn btn-discover py-2'>
                     <NavLink 
                        to="/products/categories"
                        >Discover more!</NavLink>   
                     </button>
               </div>

               <div className="col-12 col-md-6 h-100 d-flex justify-content-center align-items-center">
                     <div className='h-75 images'>
                        { layoutImages.map((el , idx)  => (
                            <Fade duration={3000} delay={3000 * idx} forever={true}>
                               <img src={el} className="w-100 h-100" alt="image" />
                            </Fade>
                        ))}
                  
                          {/* <img src={layoutImages[0]}  alt="image" /> */}
                     </div>
               </div>

            </div>
         </div>
         
       </div>
   )
}

export default Layout;
