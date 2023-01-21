import React from 'react'
import bthree from '../assets/bthree.jpg'
import btwo from '../assets/btwo.jpg'
import bone from '../assets/bone.jpg'
import customize from '../assets/customize.png';

function Business(props) {
  return (
    <div className='business'>
    <img  className='business' src={ btwo } alt='me' />
    <img  className='business' src={ bthree } alt='me' />
    <img  className='business' src={ bone } alt='me' />
      <h1>
        Organize Your Business
      </h1>
      <p> 

Create a business email (yourName@yourWebsite.com) to match your 
domain name and easily access your site analytics to assist in 
growing your brand and building the most effective business 
solutions for your brand. 
<br/>
Host your own video conferences with clients and present your client 
presentations to better organize your communication with clients. 
  </p>
  <img className="webimg" src={customize} alt="loca"/>
  <br/>
  <br/>
<button>
    Get Started
</button>
    </div>
  )
}

export default Business
