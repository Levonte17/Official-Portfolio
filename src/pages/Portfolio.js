import React from 'react';
import tblweb from '../assets/tblweb.png'
import otcweb from '../assets/otcweb.png'
import dihweb from '../assets/dihweb.png'

function Portfolio(props) {
  return (
    <div className='portfolio'>
      <h1> Our Consulting And Coaching Services </h1>
      <h2> 
        We help our clients reach their business goals
        and market their business online and offline.
        <br/>
        <br/>
        We provide graphic designs for promo advertisment
        and building trusted relationships with new 
        and existing customers.
        <br/>
        Our team of engineers make websites built with seo
        to make sure your business is easy to search and
        findable for people searching your services.
        <br/>
        We provide business owners/ entrepreneurs with 
        a business coach/ mentor to stick with you and guide 
        you with how to market/ grow your business and how
        to manage time as a business owner wit quality work
      </h2>
<h1> Websites We Produced</h1>
      <img 
            src={tblweb} 
            alt='mori'
            className="portfolioimg"
            />
      <img 
            src={otcweb} 
            alt='mori'
            className="portfolioimg"
            />
      <img 
            src={dihweb} 
            alt='mori'
            className="portfolioimg"
            />
            <h1> Online Directories</h1>

    </div>
  )
}

export default Portfolio
