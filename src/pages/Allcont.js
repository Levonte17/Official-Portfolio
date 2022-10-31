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
            
            <h1>
            <a href="https://www.linkedin.com/in/fullstack-levonte-larry/">
                <img src={li} />
            </a>
            </h1>
            <h1>
                <img src={email} />
            </h1>
            <h1>
                <img src={fb} />
            </h1>
            
            <h1>
                <img src={gh} />
            </h1>
            <h1>
                <img src={ig} />
            </h1>      
            <h1>
                <img src={phone} />
            </h1>
</div>

    );
}

export default Allcont;