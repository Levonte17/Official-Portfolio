import React from 'react'
import inspire from '../assets/inspire.png';
import me from '../assets/me.png'


function Inspire(props) {
  return (
    <div className='inspire'>
      <h1>
        Podcasts & Blogs
      </h1>
    <img 
        className="webimg" 
        src={inspire} 
        alt="inspire"
    />
    <br/>
    <img  className='insp' src={ me } alt='me' />


    </div>
  )
};

export default Inspire;
