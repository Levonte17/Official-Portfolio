import one from '../assets/one.jpeg';
import abmo from '../assets/abmo.mp4';
import React from 'react';

function About(props) {
    return(
        
        <div className="image">
            
            <h1>
                <video src={abmo} alt="about" autoPlay loop muted />
            </h1>
            <h1>
                <img src={one} />
            </h1>
          
    
</div>
    );
}

export default About;