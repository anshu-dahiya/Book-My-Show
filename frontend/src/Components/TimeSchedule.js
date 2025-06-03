import React from 'react'
import { slots } from '../data'
import RadioComponent from './RadioComponent'
import '../Css/TimeSchedule.css'

const TimeSchedule = () => {
  return (
    <>
    <div className='Slot_container'>
      <h1 className='TS_heading'>Select a Schedule :- </h1>

      <div className='TS_main_container'>
        {slots.map((element,index) => {
          return(
            <RadioComponent text={element} key={index}/>
          )
        })}
      </div>
      
    </div>
    </>
  )
}

export default TimeSchedule