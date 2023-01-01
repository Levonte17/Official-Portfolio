import React from 'react'
import booking from '../assets/booking.png';
function Booking(props) {
  return (
    <div className='create'>
            <img 
        className="creimg" 
        src={booking} 
        alt="Booking"
      />
      <div className='create1'>
      <h2>
        Custom Booking
      </h2>

      <p>
        - Customize your booking forms and 
        get client information  
      </p>
<br/>
      <p>
        - Customize form information 
        to send directly to your
        email, phone number
      </p>
<br/>

      <p>
        - Stay orginized with scheduled 
        bookings.
      </p>

<br/>
<br/>
<br/>
  <hr className='hr1'/>
 
  </div>
  <hr className='hr1'/>

    </div>
  )
}

export default Booking;