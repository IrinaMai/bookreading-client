import React, { useState } from 'react'

import BookSelect from '../bookSelect/BookSelect'

const TrainingForm = () => {
  const [books, setBooks] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [finishDate, setFinishDate] = useState(new Date())

  const handleChange = e => {
    setBooks(() => {
      const normalizedArray = e.map(book => ({
        id: book.id,
        bookName: book.label,
      }))
      return [...normalizedArray]
    })
  }


  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="formContainer" style={{ paddingBottom: '400px' }}>
      <form onSubmit={handleSubmit}>
        <p className="formTitle">Моє тренування</p>
        <div>
          <input
            type="date"
            name="startDate"
            value={startDate}
            placeholder="Початок"
            onChange={(e)=>setStartDate(e.target.value)}
          />
        </div>
        <div>
          <input
            type="date"
            name="finishDate"
            value={finishDate}
            placeholder="Завершення"
            onChange={(e)=>setFinishDate(e.target.value)}
          />
        </div>
        <BookSelect onChange={handleChange} />
        <button type="submit">Додати</button>
      </form>
    </div>
  )
}

export default TrainingForm

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
