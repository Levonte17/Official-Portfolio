
import sp from '../assets/sp.jpeg';
import cre from '../assets/cre.jpeg';
import aa from '../assets/aa.jpeg';
import ta from '../assets/ta.jpeg';
import ct from '../assets/ct.jpeg';
import cw from '../assets/cw.jpeg';
import ek from '../assets/ek.jpeg';
import React from 'react';

function Websites(props) {
    return(
    
      <div className=''>
        <div className="allcont">
            
            <a href="https://eskeezy-1.herokuapp.com/">
                <img src={ek} />
            </a>
            
            <a href="">
                <img src={ct} />
            </a>

            <a href="https://sapmpfitness.herokuapp.com/">
                <img src={sp} />
            </a>

            <a href="">
                <img src={ta} />
            </a>

            <a>
                <img src={aa} />
            </a>

            <a>
                <img src={cre} />
            </a>
        
        
        
    </div>
</div>

    );
}

export default Websites;