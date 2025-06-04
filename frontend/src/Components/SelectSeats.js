import React from 'react'
import { seats } from '../data'
import SeatInputs from './SeatInputs'
import '../Css/SelectSeats.css'

const SelectSeats = () => {
  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats : </h1>

      <div className='SS_main_container'>
        {seats.map((element,index) => {
          return(
            <SeatInputs text={element} key={index} />
          )
        })}
      </div>

    </div>
  )
}

export default SelectSeats