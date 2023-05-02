import React from 'react'
import circle from '../assets/circle.png';
import circlee from '../assets/circlee.png';
import circleee from '../assets/circleee.png';

function Why(props) {
  return (
    <div className='whyus'>
      <h1> WHY CHOOSE US </h1>
      <img className='imgs' alt='imgw' src={circle}  />
      <img className='imgs' alt='imgw' src={circleee}  />
      <img className='imgs' alt='imgw' src={circlee}  />

        <p>
        We provide comprehensive business consulting services to help you reach your goals. 
        Our team of experienced professionals can help you develop a strategic plan, 
        identify opportunities for growth, and create a roadmap for success. 
        We also offer a wide range of services, including web development, Search Engine Directories, 
        market research, and operational optimization. Our websites are developed with SEO 
        (Search Engine Optimization) in consideration to assure your business reach goals.
        </p>
    </div>
  )
}

export default Why
