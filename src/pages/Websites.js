
import samp from '../assets/samp.gif';
import barber from '../assets/barber.gif';
import e from '../assets/e.gif';
import colty from '../assets/colty.gif';
import humble from '../assets/humble.gif';
import React from 'react';

function Websites(props) {
    return(
      <div className=''>
        <div className="allcont">
    <h1>
        Websites And Features
    </h1>
            
            <a className='img' href="https://sampfitness.netlify.app">
                <img alt='img' src={samp} />
            </a>
            
            <a className='img' href="https://brushcutz.netlify.app">
                <img alt='img' src={barber} />
            </a>

            <a className='img' href="https://humbleme.netlify.app">
                <img alt='img' src={humble} />
            </a>

            <a className='img' href="https://ekustoms.adaptable.app/">
                <img alt='img' src={e} />
            </a>


            <a className='img' href="https://humbleme.netlify.app">
                <img alt='img' src={colty} />
            </a>

        
        
        
    </div>
</div>

    );
}

export default Websites;