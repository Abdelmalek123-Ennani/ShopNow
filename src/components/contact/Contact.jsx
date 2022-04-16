import React, { useEffect } from 'react'
import './contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope, faLocationDot, faPaperPlane  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faGithub , faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

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
  
    <h1 class="section-header">Contact</h1>
        <div class="contact-wrapper">

      
      <form id="contact-form" class="form-horizontal" role="form">
         
        <div class="form-group mb-2">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
          </div>
        </div>
  
        <div class="form-group mb-2">
          <div class="col-sm-12">
            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
          </div>
        </div>
  
        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
        
        <button class="btn btn-send send-button" id="submit" type="submit" value="SEND">
          <div class="alt-send-button">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span class="send-text">SEND</span>
          </div>
        
        </button>
        
      </form>
      
        <div class="direct-contact-container">
  
          <ul class="contact-list">
            <li class="list-item"><FontAwesomeIcon icon={faLocationDot} /> <span class="contact-text place">Mohammedia, Morocco</span></li>
            
            <li class="list-item"><FontAwesomeIcon icon={faPhone} /><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 231-32432-23</a></span></li>
            
            <li class="list-item"><FontAwesomeIcon icon={faEnvelope} /><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">fakeStore@tyz.com</a></span></li>
            
          </ul>
  
          <hr />
          <ul class="social-media-list">
            <li><a href="#" target="_blank" class="contact-icon">
               <FontAwesomeIcon className='github' icon={faGithub} />
              </a>
            </li>
            <li><a href="#" target="_blank" class="contact-icon">
              <FontAwesomeIcon className='linkedin' icon={faLinkedin} />
             </a>
            </li>
            <li><a href="#" target="_blank" class="contact-icon">
              <FontAwesomeIcon className='twitter' icon={faTwitter} />
             </a>
            </li>
            <li><a href="#" target="_blank" class="contact-icon">
              <FontAwesomeIcon className='instagram' icon={faInstagram} />
             </a>
            </li>    
          </ul>
          <hr />

  
        </div>
      
    </div>
    
  </section>  
    
    
  )
}

export default Contact