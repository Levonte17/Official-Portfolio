
import samp from '../assets/samp.png';
import barber from '../assets/barber.png';
import ekust from '../assets/ekust.png';
import colty from '../assets/colty.png';
import React from 'react';

function Websites(props) {
    return(
        <div className="website">
    <h1>
        Websites And Features
    </h1>


<div className='web2'>
    <img alt='imgw' src={samp} />

    <h2>
        SAMP FITNESS 
    </h2>

    <p>
        I collaborated with the owner on SAMP Fitness 
        to provide graphic designs to support his brand vision 
        and personality.
        This website is easy to join by simply loging in with
        your preexisting google account to ensure extra security
        and privacy of your data.
    </p>
            <a className='img' href="https://sampfitness.netlify.app">
                <button> 
                    Visit Website 
                </button>
            </a>
            <br/>
            <br/>
</div>  

           
            
<div className='web2'>
    <img alt='imgw' src={barber} />

    <h2>
        BRUSHCUTZ BARBERSHOP 
    </h2>

    <p>
        I collaborated with the owner on SAMP Fitness 
        to provide graphic designs to support his brand vision 
        and personality.
        This website is easy to join by simply loging in with
        your preexisting google account to ensure extra security
        and privacy of your data.
    </p>
               <a className='img' href="https://brushcutz.netlify.app">
                <button> 
                    Visit Website 
                </button>
            </a>
            <br/>
            <br/>
</div> 


<div className='web2'>
    <img alt='imgw' src={ekust} />

    <h2>
        E-KUSTOMS LLC 
    </h2>

    <p>
        I collaborated with the owner on SAMP Fitness 
        to provide graphic designs to support his brand vision 
        and personality.
        This website is easy to join by simply loging in with
        your preexisting google account to ensure extra security
        and privacy of your data.
    </p>
        <a className='img' href="https://ekustoms.adaptable.app/">
            <button> 
                Visit Website 
            </button>
        </a>
            <br/>
            <br/>
</div>



<div className='web2'>
    <img alt='imgw' src={colty} />

    <h1>
        COLTY TEMPLE NCOC
    </h1>

    <p>
        I collaborated with the owner on SAMP Fitness 
        to provide graphic designs to support his brand vision 
        and personality.
        This website is easy to join by simply loging in with
        your preexisting google account to ensure extra security
        and privacy of your data.
    </p>
               <a className='img' href="https://coltytemple.netlify.app">
                <button> 
                    Visit Website 
                </button>
            </a>
            <br/>
            <br/>
</div>
    </div>
    );
}

export default Websites;