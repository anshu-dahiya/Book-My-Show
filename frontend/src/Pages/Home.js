import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import '../Css/Home.css'

const Home = () => {
  return (
    <div>
        <div className='select_movie_component'>
          <SelectMovie/>
        </div>
    </div>
  )
}

export default Home