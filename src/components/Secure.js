import React from 'react'
import security from '../assets/security.png';
function Secure(props) {
  return (
    <div className='create'>
            <img 
        className="creimg" 
        src={security} 
        alt="Secure"
      />
    <div className='create1'>
      <h2>
        Built With Security Infrastructure
      </h2>
      <p>
        - We keep your site protected with firewalls
        and other custom security measures. 
      </p>
<br/>
      <p>
        - Admin controls for you and employees
      </p>
<br/>
      <p>
        - Your website visitors data and information is secure 
      </p>
<br/>
<br/>
  <hr className='hr1'/>
<br/>
    </div>
  <hr className='hr1'/>

    </div>
  )
}

export default Secure;