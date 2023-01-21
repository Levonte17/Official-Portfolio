import React from 'react'
import me from '../assets/me.png'

function Pod(props) {
  return (
    <div className='podcast'>
      <h1>
        INSPERATIONAL STORIES
      </h1>
      <p>
      Share your inspiring stories. Spotlight your success and current accomplishments as well as your aspiring goals for the future.
<br/>
     Personalize your blogs by adding your own YourName.com
    <br/>With this FREE domain name your name gains Google Analytics and you can 
    easily display your personal services and become easily accessible. 
<br/>
 Popular for sales representatives and agents as they are forced to communicate less but advertise their services more with easy access

      </p>
      <img  className='insp' src={ me } alt='me' />
    </div>
  )
}

export default Pod
