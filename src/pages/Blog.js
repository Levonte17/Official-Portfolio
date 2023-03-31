import React from 'react';
import { Link } from 'react-router-dom';
import otc from '../assets/otc.png';
import mai from '../assets/mai.png';
function Blog(props) {
  return (
    <div className='blogs'>
        <h1> Digital Investors Blogs</h1>
      <Link to='/kodyblog' >
        <img src={otc} alt='kody' className="jamori" /> 
        <h2>Off The Curb Apparel</h2>
      </Link>
      <Link to='/isoblog' >
        <img src={mai} alt='iso' className="jamori" /> 
        <h2>Music Artist: ISO</h2>
      </Link>
    </div>
  )
};

export default Blog;
