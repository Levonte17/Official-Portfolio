import React from 'react'
import inspire from '../assets/inspire.png';

function Inspire(props) {
  return (
    <div className='inspire'>
    <img 
        className="webimg" 
        src={inspire} 
        alt="inspire"
    />
      <h1>
        Podcasts & Blogs
      </h1>
      

    </div>
  )
};

export default Inspire;
