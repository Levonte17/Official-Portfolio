
import samp from '../assets/samp.gif';
import barber from '../assets/barber.gif';
import e from '../assets/e.gif';
import colty from '../assets/colty.gif';
import humble from '../assets/humble.gif';
import React from 'react';

function Websites(props) {
    return(
        <div className="website">
    <h1>
        Websites And Features
    </h1>
            
            <a className='img' href="https://sampfitness.netlify.app">
                <img alt='imgw' src={samp} />
            </a>
            <p>
                
            </p>
            
            <a className='img' href="https://brushcutz.netlify.app">
                <img alt='imgw' src={barber} />
            </a>
            <p>

            </p>

            <a className='img' href="https://humbleme.netlify.app">
                <img alt='imgw' src={humble} />
            </a>
            <p>

            </p>

            <a className='img' href="https://ekustoms.adaptable.app/">
                <img alt='imgw' src={e} />
            </a>
            <p>
                
            </p>


            <a className='img' href="https://humbleme.netlify.app">
                <img alt='imgw' src={colty} />
            </a>
            <p>
                
            </p>
    </div>
    );
}

export default Websites;