import React from 'react'
import web from '../assets/web.png';

function Create(props) {
  return (
    <div className='web' >
    <img 
        className="webimg" 
        src={web} 
        alt="web"
    />
      <h1>
        Create A Website
      </h1>
      

    </div>
  )
}

export default Create;
