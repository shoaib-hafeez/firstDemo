import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='footer_jsx'>
         <div className="footer_max">
            
         <div className="footer_contact">
                <h5 className='footer_h5'>CONTACT DETAILS</h5>

               
                <p>  <FaLocationDot />  156-157, Block 3, BYJCHS, Bahadurabad <br />
                      Karachi, Pakistan</p>

               
                 <p> <BsTelephoneFill />  +923171234567</p>
            </div>
            <div className="footer_contaactUs">
                
            <h5 className='footer_h5'>CONTACT US</h5>

            <p>Contact Us</p>
            <p>Delivery Info</p>
            <p>FaQs</p>
            </div>

            <div className="footer_contaactUs">
            <h5 className='footer_h5'>INFORMATION</h5>

            <p>Return & Refund</p>
            <p>Privacy Policy</p>
            <p>Terms & Condtion</p>
            </div>
         </div>

        </div>
    )
}

export default Footer