import bs from '../assets/bs.jpeg';
import bsv from '../assets/bsv.mp4';
import React from 'react';

function Essential(props) {
    return(
        
        <div className="image">
            
            <h1>
                <video src={bsv} alt="about" autoPlay loop muted />
            </h1>
            <h1>
                <img src={bs} />
            </h1>
          
    
</div>
    );
}
export default Essential;