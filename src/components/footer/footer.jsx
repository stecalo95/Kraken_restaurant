import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer container-fluid'>

        <div className="row text-start">
            <div className='col-12 col-md-4'>
                
                <ul>
                    <li> <h6>CONTACT US</h6> </li>
                    <li> Address. Via Lorem Ipsum Dolor  123 , 12345</li>
                    <li> Mail. kraken@example.com</li>
                    <li> Tel. +123 456 789</li>
                </ul>
            </div>

            <div className='col-12 col-md-4'>
                
                <ul>
                    <li><h6>LINKS</h6></li>
                    <li> Home</li>
                    <li> About</li>
                    <li> Menu</li>
                    <li> Contact</li>
                </ul>
            </div>

            <div className='col-12 col-md-4 '>
                <h6 className='ms-4'>FOLLOW US</h6>
                <ul className='d-flex'>
                    
                    <li> <a href="#"><i className="fab fa-facebook-f fa-2x me-2 "></i></a> </li>
                    <li> <a href="#"><i className="fab fa-instagram fa-2x me-2"></i></a> </li>
                    <li> <a href="#"><i className="fab fa-twitter fa-2x me-2"></i></a> </li>
                    <li> <a href="#"><i className="fab fa-youtube fa-2x"></i></a> </li>

                    
          
          
          
                </ul>
            </div>
        </div>
        

        <div className='row text-center pt-5'>
            <h6>Copyright © 2022. All Rights Reserved.</h6>
        </div>
      
    </div>
  )
}

export default Footer