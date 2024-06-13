import React from "react";
import "./Footer.css"
import email from "../assets/mail.png"
import phone from "../assets/phone.png"
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h1 className='w-full text-3xl ml-[-1.7rem] flex font-bold'> 
            <img className="h-[5rem] mr-[-1rem]" src={logo}/> 
                uifry 
        </h1>
        <p className='mt-[-2rem] flex '> <img src={email}/>help@frybix.com</p>
        <p className='mt-[0.5rem] flex '> <img src={phone}/>+1 234 456 678 89</p>
        <div className='flex justify-between  w-[50%] md: my-6'>
            <a href="https://en-gb.facebook.com/people/Het-Gala/pfbid0zErhgyw7wY1EctfKxrcwAPi7QwYR8yUhvKMLyuwbdtuBLVUAea7ca8TVLmWFTqyal/" className="mr-4" target="_main"><i className="text-2xl fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/hetgala30/" className="mr-4" target="_main"><i className="text-2xl fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/het-gala-24a5372b4/" className="mr-4" target="_main"><i className="text-2xl fab fa-linkedin"></i></a>
        </div>

      </div>
      <div className='f_li'>
          <div>
              <h6 className='f_titles'>Links</h6>
              <ul>            
                  <a href="#"><li className="list">Home</li></a>
                  <a href="#"><li className="list">About us</li></a>
                  <a href="#"><li className="list">Bookings</li></a>
                  <a href="#"><li className="list">Blog</li></a>     
              </ul>
          </div>
          <div>
              <h6 className='f_titles'>Legal</h6>
              <ul>
                  <a href="#"><li className='list'>Terms Of Use</li></a>
                  <a href="#"><li className='list'>Privacy Policy</li></a>
                  <a href="#"><li className='list'>Cookie Policy</li></a>
              </ul>
          </div>
          <div>
              <h6 className='f_titles'>Product</h6>
              <ul>
                  <a href="#"><li className='list'>Take Tour</li></a>
                  <a href="#"><li className='list'>Live Chat</li></a>
                  <a href="#"><li className='list'>Reveiws</li></a>    
              </ul>
          </div>
          <div>
              <h6 className='f_titles'>Newsletter</h6>
              <ul>
                  <a href="#"><li className='list'>Stay Up To Date</li></a>
                  <a href="#"><li className='font-light ml-[3rem] mt-[2rem]'>Your email</li></a>  
              </ul>
          </div>
          <button className="sub">Subscribe</button>
      </div>
      <div className="copyright">
            <p className="py-8 font-semibold font-mono">
                Copyright 2022 Uifry.Com All Rights Reserved
            </p>
      </div>
    </div>
  );
};

export default Footer;