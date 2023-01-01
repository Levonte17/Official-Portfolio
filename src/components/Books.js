import React from 'react'
import books from '../assets/books.png';

function Books(props) {
  return (
    <div className='books'>
      <h1>
        Self Development & Podcasts 
      </h1>
      <img 
        className="webimg" 
        src={books} 
        alt="Books"
      />
      

    </div>
  )
};

export default Books;
