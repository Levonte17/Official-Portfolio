import React from 'react'
import inspire from '../assets/inspire.png';

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
      

    </div>
  )
};

export default Inspire;
