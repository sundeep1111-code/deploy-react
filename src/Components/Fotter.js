import React from 'react'
import { FaFacebookSquare, FaInstagram, FaPinterestSquare, FaTwitterSquare} from 'react-icons/fa';
export default function Fotter() {
    return (
        <div>
          <footer className="fotter pt-3 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 ">
            <img src="/images/mainlogo.svg" className="img-fluid"/>
            
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mt-4">
            <h1>OUR SERVICES</h1>
            <ul>
              <li className="mb-1"><a className="forLink" href="#">Style Guide</a></li>
              <li className="mb-1"><a className="forLink" href="#">Pricing</a></li>
              <li className="mb-1"><a className="forLink" href="#">Maternity</a>
              </li><li className="mb-1"><a className="forLink" href="#">FAQs</a></li>
              <li className="mb-1"><a className="forLink" href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mt-4">
            <h1>OUR COMPANY</h1>
            <ul>
              <li className="mb-1"><a className="forLink" href="#">About</a></li>
              <li className="mb-1"><a className="forLink" href="#">Privacy Policy</a></li>
              <li className="mb-1"><a className="forLink" href="#">Terms & Conditions</a></li>
              
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mt-4">
            <h1>FOLLOW US</h1>
            <div id="social-icons"><a href="https://www.facebook.com/Modistabox/" className="footer-social">
            <FaFacebookSquare/></a>
            <a href="https://www.instagram.com/modistabox/" className="footer-social">
            <FaInstagram/></a>
            <a href="https://in.pinterest.com/modistabox/" className="footer-social">
            <FaPinterestSquare/></a>
            <a href="https://twitter.com/modistabox" className="footer-social">
            <FaTwitterSquare/></a></div>
          </div>
        </div>
      </div>
    </footer>  
        </div>
    )
}
