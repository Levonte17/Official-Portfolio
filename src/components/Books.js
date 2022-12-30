import React from 'react'
import books from '../assets/books.png';

function Books(props) {
  return (
    <div className='books'>
      <img 
        className="webimg" 
        src={books} 
        alt="Books"
      />
      <h1>
        Summaries & Podcasts 
      </h1>
      

    </div>
  )
};

export default Books;
