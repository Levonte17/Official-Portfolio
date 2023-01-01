import React from 'react'
import loca from '../assets/loca.png';

function Locard(props) {
  return (
    <div className='locard'>
      <br/>
      <br/>
      <h1>
        Logos & Cards  
      </h1>
      <img 
        className="webimg" 
        src={loca} 
        alt="loca"
      />
      <div className='sidebysideimgs'>
    <div className='sidebysidepink'>
        <h1>
            Custom Buisiness Logo
            <p>
              - Create your own logo to fit your 
              personality or brand image
              <br/>
              <br/>
              - All logos include FREE graphic designs for
              instant customer engagment
              <br/>
              <br/>
              - FREE consultation to get new ideas and advice
            </p>
        </h1>

        <br/>

        <h1>
            Custom Business Cards
            <p>
              - Customize your business cards to fit your
              personality or brand image
              <br/>
              <br/>
              - Get Your Cards Sent FREE of shipping
              <br/>
              <br/>
              - QR Code Generator for easy customer
              convience and availability
              <br/>
              <br/>
              - FREE consultation to get new ideas and advice
            </p>
        </h1>

    </div>
    </div>

    </div>
  )
};

export default Locard;
