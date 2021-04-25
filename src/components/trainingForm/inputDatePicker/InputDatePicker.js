import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from '../../icons/CalendarIcon'
import InputDateContainer from './InputDatePickerStyled'

const InputDatePicker = ({ pickedDate, placeholderText, onChange }) => {
  return (
    <InputDateContainer>
      <DatePicker
        selected={pickedDate === '' ? null : pickedDate}
        onChange={date => onChange(date)}
        dateFormat="d.MM.yyyy"
        name="data"
        placeholderText={placeholderText}
        className="formInputDate"
        minDate={new Date()}
        popperProps={{
          positionFixed: true, // use this to make the popper position: fixed
        }}
      />
      <CalendarIcon className="inputIcon" />
    </InputDateContainer>
  )
}

export default InputDatePicker
