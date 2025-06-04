import React from 'react'
import { seats } from '../data'
import '../Css/LastBookingDetails.css'

const LastBookingDetails = () => {
  return (
    <div className='LBD_main_container'>
      <h2 className='LBD_heading'>Last Booking :-</h2>
      
      <div className='seats_container'>
        <p className='seats_heading'>Seats:</p>
        <ul className='seats'>
          {seats.map((seat,index) => (
            <li className='seat_value' key={index}>
              (seat) : 0;
            </li>
          ))}
        </ul>
      </div>

      <p className='slot' style={{textAlign:'left'}}>Slot: <span>00:00 AM</span></p>
      <p className='movie'>Movie: <span>Stolen</span></p>

    </div>
  )
}

export default LastBookingDetails