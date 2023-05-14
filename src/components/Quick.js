import React from 'react'
function Quick(props) {


  return (
<form className='quick'id="contact" >
      <input placeholder='Name' type="text" name='name' 
      required/>
      <input placeholder='Email ' type="text" name='email'
        required/>
      <input placeholder='Quick Message' type="text" name='message'
      required/>
      <button name="submit" type='submit' >Submit</button>

</form>
  )
}

export default Quick;
