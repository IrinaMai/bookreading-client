import React, { useState } from 'react'

import BookSelect from '../bookSelect/BookSelect'
import FormContainer from './TrainingFormStyled'

const TrainingForm = () => {
  const [books, setBooks] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [finishDate, setFinishDate] = useState(new Date())

  const handleChange = selectedOption => {
    setBooks(selectedOption)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={handleSubmit}>
        <p className="formTitle">Моє тренування</p>
        <div className="inputGroup">
          <input
            type="date"
            name="startDate"
            value={startDate}
            placeholder="Початок"
            onChange={e => setStartDate(e.target.value)}
            className="formInput"
          />
          <input
            type="date"
            name="finishDate"
            value={finishDate}
            placeholder="Завершення"
            onChange={e => setFinishDate(e.target.value)}
            className="formInput"
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

// const books = [
//   { id: '1', value: 'Book1' },
//   { id: '2', value: 'Book2' },
//   { id: '3', value: 'Book3' },
// ]

/* <select name="books" required>
          <option value="" disabled selected hidden>
            Обрати книги з бібліотеки
          </option>
          {books.map(({ value, id }) => (
            <option key={id} value={value}>{value}</option>
          ))}
        </select> */
