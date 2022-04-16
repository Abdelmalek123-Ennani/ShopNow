import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
     <div class="footer-dark border py-4">
         <footer>
             <div class="container">
                 <div class="row">
                     <div class="col-sm-6 col-md-3 item">
                         <h3>Services</h3>
                         <ul>
                             <li><a href="#" className='btn footer-link'>Men's Clothing</a></li>
                             <li><a href="#" className='btn footer-link'>Women's clothing</a></li>
                             <li><a href="#" className='btn footer-link'>Jowelory</a></li>
                             <li><a href="#" className='btn footer-link'>electronics</a></li>
                         </ul>
                     </div>
                     <div class="col-sm-6 col-md-3 item">
                         <h3>About</h3>
                         <ul>
                             <li><a href="#" className='btn footer-link'>Company</a></li>
                             <li><a href="#" className='btn footer-link'>Team</a></li>
                             <li><a href="#" className='btn footer-link'>Careers</a></li>
                         </ul>
                     </div>
                     <div class="col-md-6 item text">
                         <h3>FakeStore</h3>
                         <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                     </div>
                     <div class="col item social">
                         <a href="#"><i class="fa fa-facebook"></i></a>
                         <a href="#"><i class="icon ion-social-twitter"></i></a>
                         <a href="#"><i class="icon ion-social-snapchat"></i></a>
                         <a href="#"><i class="icon ion-social-instagram"></i></a>
                      </div>
                 </div>
                 <p class="copyright my-2 text-center">FakeShop by Abdelmalek Ennani © { (new Date).getFullYear() }</p>
             </div>
         </footer>
     </div>
    )
 }
 
 
 export default Footer;