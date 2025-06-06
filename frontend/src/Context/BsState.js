import { useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {

    const [movie,changeMovie] = useState('');
    
    const [time,changeTime] = useState('');

    const [noOfSeat,changeNoOfSeat] = useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:""
    });

    const [lastBookingDetails,changeLastBookingDetails] = useState(null);

    return(
        <BsContext.Provider value={{
            movie,changeMovie,
            time,changeTime,
            noOfSeat,changeNoOfSeat,
            lastBookingDetails,changeLastBookingDetails
            }}
        >
            {props.children}
        </BsContext.Provider>
    )
}

export default BsState;