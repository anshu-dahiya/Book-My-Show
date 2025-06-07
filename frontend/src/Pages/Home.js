import React, { useContext } from 'react'
import SelectMovie from '../Components/SelectMovie'
import '../Css/Home.css'
import LastBookingDetails from '../Components/LastBookingDetails'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeats from '../Components/SelectSeats'
import BsContext from '../Context/BsContext'

const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  const handleBookNow = async () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie")
    } else {
      await handlePostBooking()
    }
  }


  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='select_movie_container'>
          <SelectMovie />
        </div>

        <div className='last_booking_details_container'>
          <LastBookingDetails />
        </div>
      </div>

      <div className='time_seats_container'>
        <TimeSchedule />
        <SelectSeats />
        <button className='BN-btn' onClick={() => {
          handleBookNow();
        }}>Book Now</button>
      </div>
    </div>
  )
}

export default Home