
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

    <button>
        Create  A Website
    </button>
<br/>
<br/>
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
        BRUSHCUTZ BARBER SHOP 
    </h2>

    <p>
        I collaborated with the owner on BrushCutz Barber Shop 
        to provide Graphic motion designs to attract new clients
        and brand strengthening. Users can easily login with
        their google account to save time. This website is
        installed with firewalls to allow only logged in users 
        to access sign up form.
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
        I collaborated with the owner of E-kustoms LLC
        to make his vision come alive of displaying high quality
        artwork. Customers can easily contact the owner to place 
        custom orders within just clicks.
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
        I collaborated with Colty Temple NCOC 
        to provide a web pressence to welcome new visitors. Logged
        in church members have the ability to upload and 
        display announcements to ensure privacy.
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