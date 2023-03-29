import React from 'react';
import { Link } from 'react-router-dom';
import otcb from '../assets/otcb.png';
function Blog(props) {
  return (
    <div className='blogs'>
        <h1> Digital Investors Blogs</h1>
      <Link to='/kodyblog' >
        <img src={otcb} alt='jamori' className="jamori" /> 
        <h2>Off The Curb Apparel</h2>
      </Link>
    </div>
  )
};

export default Blog;
