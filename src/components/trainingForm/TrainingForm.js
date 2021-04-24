import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addBook } from '../../redux/actions/trainingActions'
// import { getBooks } from '../../redux/selectors/trainingSelectors'
import BookSelect from '../bookSelect/BookSelect'
import InputDatePicker from './inputDatePicker/InputDatePicker'
import FormContainer from './TrainingFormStyled'

const TrainingForm = () => {
  const [option, setOption] = useState('')
  const [startDate, setStartDate] = useState('')
  const [finishDate, setFinishDate] = useState('')
  const dispatch = useDispatch()
  const history = useHistory();

  const validate = values => {
    const errors = {}

    if (!values.startDate) {
      errors.startDate = 'Виберіть дату початку тренування'
    }
    if (!values.finishDate) {
      errors.finishDate = 'Виберіть дату завершення тренування'
    }

    if (!values.book) {
      errors.book = 'Виберіть книгу для тренування'
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      startDate: '',
      finishDate: '',
      book: '',
    },
    validate,
    onSubmit: values => {
      dispatch(addBook(option))
      history.push("/training");
    },
  })

  const handleChange = value => {
    formik.setFieldValue('book', value.value)
    setOption(value)
  }

  const handleStartDate = date => {
    formik.setFieldValue('startDate', date)
    setStartDate(date)
  }
  const handleFinishtDate = date => {
    formik.setFieldValue('finishDate', date)
    setFinishDate(date)
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={formik.handleSubmit} autoComplete="off">
        <p className="formTitle">Моє тренування</p>
        <div className="inputGroup">
          <InputDatePicker
            pickedDate={startDate}
            onChange={handleStartDate}
            value={formik.values.data}
            placeholderText="Початок"
          />
          {formik.errors.startDate ? (
            <span className="error start">{formik.errors.startDate}</span>
          ) : null}
          <InputDatePicker
            pickedDate={finishDate}
            onChange={handleFinishtDate}
            value={formik.values.data}
            placeholderText="Завершення"
          />
          {formik.errors.finishDate ? (
            <span className="error finish">{formik.errors.finishDate}</span>
          ) : null}
        </div>
        <div className="selectGroup">
          <BookSelect
            className="formSelect"
            value={formik.values.book}
            onChange={handleChange}
          />
          {formik.errors.book ? (
            <span className="error">{formik.errors.book}</span>
          ) : null}
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
