import React, { useState } from 'react'
import './BookingForm.css'
import { BiCake } from "react-icons/bi";

export default function BookingForm() {
  
    const [bookState, setBookState] = useState({
        Date:"",
        Time:"",
        People:"",
        Occasion:"Birthday"
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBookState((prevState) => ({
          ...prevState,
          [name]: value
        }));
        console.log(bookState)
      };

      const validateForm = () => {
        const { Date, Time, People, Occasion } = bookState;
        const isValid = Date !== "" && Time !== "" && People !== "" && Occasion !== "";
        setIsFormValid(isValid);
      };

      React.useEffect(() => {
        validateForm();
      }, [bookState]);

    return (
    <form id="bookingForm">
        <label className="LabelForm" for="res-date">Choose date</label>
        <input type="date" id="res-date" name="Date" value={bookState.Date} onChange={(e)=>handleChange(e)} required/>
        <label className="LabelForm" for="res-time">Choose time</label>
        <select id="res-time " name="Time" value={bookState.Time} onChange={(e)=>handleChange(e)} required>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
        </select>
        <label className="LabelForm"  for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" name="People" value={bookState.People} onChange={(e)=>handleChange(e)}/>
        <label className="LabelForm" for="occasion">Occasion</label>
        <select id="occasion" name="Occasion" value={bookState.Occasion} onChange={(e)=>handleChange(e)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <BiCake/>
        <input type="submit" value="Make Your reservation" disabled={!isFormValid}/>
    </form>
  )
}
