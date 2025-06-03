import React from 'react'
import { moviesList } from '../data';
import RadioComponent from './RadioComponent'
import '../Css/SelectMovie.css'

const SelectMovie = () => {
  return (
    <>
      <h1 className='SM_heading'> Select A Movie :- </h1>
      
      <div className='SM_main_container'>
        {moviesList.map((element,index) => {
            return (
                <RadioComponent  text={element} key={index}/>
            )
        })}
      </div>
    </>
  )
}

export default SelectMovie