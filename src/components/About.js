import one from '../assets/one.jpeg';
import abmo from '../assets/abmo.jpeg';
import React from 'react';

function About(props) {
    return(
        <div className="image">
            <div className='ab'>
            <img src={one} />
            <video src={abmo} />
            </div></div>
    );
}

export default About;