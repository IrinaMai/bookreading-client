import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ResultsWrapper from './ResultsStyled'

const Results = () => {
  return (
    <ResultsWrapper>
      <p className="resultsTitle">Результати</p>
      <form
        className="resultsForm"
        // onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
         <div className="formGroup">
        <div className="inputGroup">
          <label className="label" htmlFor="date">
            Дата
          </label>
          <DatePicker
            // selected={pickedDate === '' ? null : pickedDate}
            // onChange={date => onChange(date)}
            dateFormat="d.MM.yyyy"
            name="data"
            // placeholderText={placeholderText}
            className="formInputDate"
            minDate={new Date()}
            maxDate={new Date('2021-05-10')}
            popperProps={{
              positionFixed: true, // use this to make the popper position: fixed
            }}
            id="date"
          />
        </div>
        <div className="inputGroup">
          <label className="label"htmlFor="pages">Кількість сторінок</label>
          <input
            name="pages"
            placeholder="..."
            id="pages"
            className="pagesInput"
          />
        </div>
        </div>
      <button type="submit" className="formButton">Додати результат</button>
      </form>
    </ResultsWrapper>
  )
}

export default Results
