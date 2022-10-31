import phone from '../assets/phone.jpeg';
import ig from '../assets/ig.jpeg';
import gh from '../assets/gh.jpeg';
import fb from '../assets/fb.jpeg';
import email from '../assets/email.jpeg';
import li from '../assets/li.jpeg';
import React from 'react';

function Allcont(props) {
    return(

        <div className="allcont">
            
            <h1>CONTACT US</h1>
    
            <a href="https://www.linkedin.com/in/fullstack-levonte-larry/">
                <img src={li} />
            </a>

            <a href="https://github.com/Levonte17?tab=repositories">
                <img src={gh} /> 
            </a>
            <a href="https://www.instagram.com/the.digital.doctor/">
                <img src={ig} />
            </a>
            <a href="mailto:levontelarry@digital-investors-hub.com">
                <img src={email} />               
            </a>
        
            <a href="https://www.facebook.com/profile.php?id=100086642206680">
                <img src={fb} />               
            </a>

            <a href="tel:+9126758977">
                <img src={phone} />
            </a>     
    
</div>

    );
}

export default Allcont;