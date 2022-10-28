import one from '../assets/one.jpeg';
import abmo from '../assets/abmo.mp4';
import React from 'react';

function About(props) {
    return(
        <div className="image">
            <div className='ab'>
            <img src={one} />
        <div className='abvideo'>
            <video src={abmo} alt="about" autoPlay loop muted />
        </div>
    </div>
</div>
    );
}

export default About;