import React from 'react'
import me from '../assets/me.png'

function Pod(props) {
  return (
    <div className='podcat'>
      <h1>
        INSPERATIONAL STORIES
      </h1>
      <p>
    Get featured for our most blogs or podcasts of inspiring stories where we spotlight your success and accomplishments as well as your aspiring accomplishments for your future.

Personalize your blogs by adding your own YourName.com. With this FREE domain name your name gains Google Analytics and you can easily display your personal services and become accessible. 

 Popular for sales representatives and agents as they are forced to communicate less but advertise their services more with easy access

      </p>
      <img  className='insp' src={ me } alt='me' />
    </div>
  )
}

export default Pod
