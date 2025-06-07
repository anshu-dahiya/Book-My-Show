import React from 'react'
import '../Css/SeatInputs.css'

const SeatInputs = ({text,noOfSeat,changeNoOfSeat}) => {

  const change_seats = (e) => {
    changeNoOfSeat({...noOfSeat,[e.target.name]:Number(e.target.value)});

    window.localStorage.setItem("seats",
      JSON.stringify({...noOfSeat,[e.target.name]:Number(e.target.value)})
    );
  }

  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
        <input 
        type='number' 
        className='seats-input' 
        placeholder='0' 
        min='0' max='30' 
        name={text}
        onChange={change_seats}
        value={noOfSeat[text]}
        /> 
    </div>
  )
}

export default SeatInputs