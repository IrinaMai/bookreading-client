import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '../../redux/actions/trainingActions'
import { getBooks } from '../../redux/selectors/trainingSelectors'

import BookSelect from '../bookSelect/BookSelect'
import InputDatePicker from './inputDatePicker/InputDatePicker'
import FormContainer from './TrainingFormStyled'

const TrainingForm = () => {
const [option, setOption] = useState('')
const [startDate, setStartDate] = useState('')
const [finishDate, setFinishDate] = useState('')

const dispatch = useDispatch()

  const handleChange = selectedOption => {
  setOption(selectedOption)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addBook(option))
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={handleSubmit} autoComplete="off">
        <p className="formTitle">Моє тренування</p>
        <div className="inputGroup">
       
          <InputDatePicker
            pickedDate={startDate}
            setPickedDate={setStartDate}
            placeholderText="Початок"
            className="startDatePicker"
          />
           <InputDatePicker
            pickedDate={finishDate}
            setPickedDate={setFinishDate}
            placeholderText="Завершення"
            className="finishDatePicker"
          />
        </div>
        <div className="selectGroup">
          <BookSelect onChange={handleChange} className="formSelect" />
          <button className="formButton" type="submit">
            Додати
          </button>
        </div>
      </form>
    </FormContainer>
  )
}

export default TrainingForm

//isMulti handler
// const handleChange = e => {
//   setBooks(() => {
//     const normalizedArray = e.map(book => ({
//       id: book.id,
//       bookName: book.label,
//     }))
//     return [...normalizedArray]
//   })
// }

/* <select name="books" required>
          <option value="" disabled selected hidden>
            Обрати книги з бібліотеки
          </option>
          {books.map(({ value, id }) => (
            <option key={id} value={value}>{value}</option>
          ))}
        </select> */
