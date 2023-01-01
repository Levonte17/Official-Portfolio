import React from 'react'
import schedule from '../assets/schedule.png';
function Schedule(props) {
  return (
    <div className='create'>
            <img 
        className="creimg" 
        src={schedule} 
        alt="Schedule"
      />
      <div className='create1'>
      <h2>
        Custom Scheduling
      </h2>

      <p>
      - customize your scheduling system and 
      secure clients

      </p>
<br/>
      <p>
      - Stay orginized with scheduled appointments
      with your clients 
      </p>
<br/>
      <p>
      - Build strong relationships with your customers 
      without sending reminders
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

export default Schedule;