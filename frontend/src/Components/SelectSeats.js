import React, { useContext } from 'react'
import { seats } from '../data'
import SeatInputs from './SeatInputs'
import '../Css/SelectSeats.css'
import BsContext from '../Context/BsContext'

const SelectSeats = () => {
  const context = useContext(BsContext);

  const {noOfSeat, changeNoOfSeat} = context;

  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats : </h1>

      <div className='SS_main_container'>
        {seats.map((element,index) => {
          return(
            <SeatInputs text={element} key={index}  noOfSeat={noOfSeat} 
            changeNoOfSeat={changeNoOfSeat} />
          )
        })}
      </div>

    </div>
  )
}

export default SelectSeats