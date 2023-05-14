import React from 'react';

function Email(props) {
  return (
    <div className='email'>
      <h1> FREE CONSULTATION </h1>
      <h2>Fill out this form to get started with your first appointment</h2>
      <form id="contact" action="" method="post">
      <input placeholder='Your Name' type="text"/>
      <input placeholder='Phone Number' type="text"/>
      <br/>
      <input placeholder='Email Address' type="text"/>
      <input placeholder='Website' type="text"/>
      <br/>
      <input placeholder='Message' type="text"/>
      <br/>
      <button name="submit" type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Email;
