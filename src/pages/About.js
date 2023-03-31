import React from 'react'
import abp from '../assets/abp.png'

function About(props) {
  return (
    <div className='about'>
      <h1> ABOUT US </h1>
        <p>
        At Digital Investors Hub, 
        we believe in providing our clients with the best possible advice and guidance to help them reach their business goals.
        We are experienced professionals who have a wealth of knowledge and expertise in a variety of areas, 
        including business strategy, operations, finance, marketing, and more. 
        We strive to provide our clients with the most up-to-date information and 
        resources to help them make informed decisions and achieve success. 
        Our goal is to help our clients reach their goals and maximize their potential. 
        We look forward to working with you and helping you reach your business goals.
        </p>
        <img 
  src={abp} 
  alt='abp'
  className="abp"
/>
    </div>
  )
}

export default About
