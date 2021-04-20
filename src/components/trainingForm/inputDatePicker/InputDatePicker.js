import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from '../../icons/CalendarIcon'
import InputDateContainer from './InputDatePickerStyled'

const InputDatePicker = ({pickedDate, setPickedDate, placeholderText }) => {
  return (
    <InputDateContainer>
    <DatePicker
      selected={pickedDate === '' ? null : pickedDate}
      onChange={date => setPickedDate(date)}
      dateFormat="d.MM.yyyy"
      name="data"
      placeholderText={placeholderText}
      className="formInputDate"
      popperProps={{
        positionFixed: true // use this to make the popper position: fixed
      }}
    />
    <CalendarIcon className="inputIcon" />
  </InputDateContainer>
  )
}

export default InputDatePicker

