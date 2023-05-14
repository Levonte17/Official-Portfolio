import React from 'react'
import {FiYoutube} from "react-icons/fi";
import {FaHome} from "react-icons/fa";
import { FiPhoneCall,
         FiInstagram
} from "react-icons/fi";

function Nav(props) {
  return (
    <div className='Nav'>
      <div className='Navs'>
        <a href='/' className='Navs'>
          <FaHome/> 
        </a>
      </div>
                <div className='Navs'>
                <a href='https://www.youtube.com/channel/UCu0gSo_y1R6tbXWK94ktP8Q' className='Navs'>
                <FiYoutube />
                <br/>
                <b>Subscribe</b>
            </a>
                </div>
                <div className='Navs' >
                    <a href='https://www.instagram.com/mr_lockdown8/'
                        className='Navs'>
                        <FiInstagram/> 
                <br/>
                        <b>Follow</b>
                    </a> 
                </div>
                <div className='Navs'>
    <a href='tel:+19125917848' className='Navs'>
             <FiPhoneCall />
             <br/>
             <b>Call </b>
    </a>
                </div>    
                </div>
  )
};

export default Nav;
