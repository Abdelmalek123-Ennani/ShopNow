import React, { useEffect } from 'react'
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope, faLocationDot, faPaperPlane  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faGithub , faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Fade } from "react-reveal"

function Contact() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    } , [])

  return (
    <section id="contact">
  
    <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
            <Fade left delay={500}> 
              <form id="contact-form" className="form-horizontal" role="form">
                
                <div className="form-group mb-2">
                  <div className="col-sm-12">
                    <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required />
                  </div>
                </div>
          
                <div className="form-group mb-2">
                  <div className="col-sm-12">
                    <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
                  </div>
                </div>
          
                <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                
                <button className="btn btn-send send-button" id="submit" type="submit" value="SEND">
                  <div className="alt-send-button">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span className="send-text">SEND</span>
                  </div>
                
                </button>
                
              </form>
            </Fade>
      

              <Fade right delay={500}>  
                <div className="direct-contact-container">
          
                  <ul className="contact-list">
                    <li className="list-item"><FontAwesomeIcon icon={faLocationDot} /> <span className="contact-text place">Mohammedia, Morocco</span></li>
                    
                    <li className="list-item"><FontAwesomeIcon icon={faPhone} /><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 231-32432-23</a></span></li>
                    
                    <li className="list-item"><FontAwesomeIcon icon={faEnvelope} /><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">fakeStore@tyz.com</a></span></li>
                    
                  </ul>
          
                  <hr />
                  <ul className="social-media-list">
                    <li><a href="#" target="_blank" className="contact-icon">
                      <FontAwesomeIcon className='github' icon={faGithub} />
                      </a>
                    </li>
                    <li><a href="#" target="_blank" className="contact-icon">
                      <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
                    </a>
                    </li>
                    <li><a href="#" target="_blank" className="contact-icon">
                      <FontAwesomeIcon className='twitter' icon={faTwitter} />
                    </a>
                    </li>
                    <li><a href="#" target="_blank" className="contact-icon">
                      <FontAwesomeIcon className='instagram' icon={faInstagram} />
                    </a>
                    </li>    
                  </ul>
                  <hr />  
                </div>
              </Fade>
      
    </div>
    
  </section>  
    
    
  )
}

export default Contact