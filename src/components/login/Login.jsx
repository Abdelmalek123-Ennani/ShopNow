

import React , {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./login.scss"
import { Slide } from "react-reveal"

const Login = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    } , [])

  return (
    <div className="container">
       <div className="row justify-content-center">
           <div className="col-md-12 col-lg-10">
               <div className="wrap d-md-flex">
                   <Slide left delay={700}>
                       <div className='img'></div>
                   </Slide>
                   <Slide right delay={700}>
                        <div className='login-wrap p-4 p-md-5'>
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className='mb-4'>Sign in</h3>
                                </div>
                                <div className='w-100'>
                                    <p className='social-media d-flex justify-content-end'>
                                        <a href="#" className="social-icon facebook d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>
                                        <a href="#" className="social-icon twitter d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                        <a href="#" className="social-icon instagram d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <form className="signin-form">
                                <div className='form-group mb-3'>
                                    <label className='label' htmlFor="name">username</label>
                                    <input 
                                        type="text" 
                                        id='name' 
                                        className='form-control' 
                                        required 
                                        placeholder='username' 
                                    />
                                </div>
                                <div className='form-group mb-3'>
                                    <label className='label' htmlFor="password">username</label>
                                    <input 
                                        type="password" 
                                        id='password' 
                                        className='form-control' 
                                        required 
                                        placeholder='password' 
                                    />
                                </div>
                                <div className='form-group mb-3'>
                                <button type="submit" className='form-control btn btn-signin rounded submit px-3'>Sign in</button>
                                </div>
                                <div className='form-group d-md-flex'>
                                    <div className='w-50 text-left'>
                                        <label className='checkbox-wrap checkbox-primary mb-0'>
                                            <input type="checkbox" />
                                            Remember me
                                        </label>
                                    </div>
                                    <div className='w-50'>
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p className='signup-suggestion'>
                                Not a member? 
                                <a href="#">Sign up</a>
                            </p>
                        </div>
                   </Slide>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Login