import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import { DateTime } from 'luxon'
import { addBook } from '../../redux/actions/trainingActions'
// import { getBooks } from '../../redux/selectors/trainingSelectors'
import convertDate from '../../utils/dateConverter'
import BookSelect from '../bookSelect/BookSelect'
import InputDatePicker from './inputDatePicker/InputDatePicker'
import FormContainer from './TrainingFormStyled'

const TrainingForm = () => {
  const [option, setOption] = useState('')
  // const [startDate, setStartDate] = useState('')
  // const [finishDate, setFinishDate] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const validationSchema = yup.object({
    startDate: yup.string().required('Виберіть дату початку тренування'),
    finishDate: yup
      .string()
      .required('Виберіть дату завершення тренування')
      .when('startDate', (startDate, schema) => {
        return schema.test({
          test: finishDate =>
            startDate &&
            DateTime.fromISO(convertDate(startDate)) <=
              DateTime.fromISO(convertDate(finishDate)),
          message: 'Вибрана дата не коректна',
        })
      }),
    book: yup.string().required('Виберіть книгу для тренування'),
  })

  const formik = useFormik({
    initialValues: {
      startDate: '',
      finishDate: '',
      book: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(addBook(option))
      history.push('/training')
    },
  })

  const handleChange = value => {
    formik.setFieldValue('book', value.value)
    setOption(value)
  }

  const handleStartDate = date => {
    formik.setFieldValue('startDate', date)
    // setStartDate(date)
  }
  const handleFinishtDate = date => {
    formik.setFieldValue('finishDate', date)
    // setFinishDate(date)
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={formik.handleSubmit} autoComplete="off">
        <p className="formTitle">Моє тренування</p>
        <div className="inputGroup">
          <InputDatePicker
            pickedDate={formik.values.startDate}
            onChange={handleStartDate}
            // value={formik.values.startDate}
            placeholderText="Початок"
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <span className="error start">{formik.errors.startDate}</span>
          ) : null}
          <InputDatePicker
            pickedDate={formik.values.finishDate}
            onChange={handleFinishtDate}
            // value={formik.values.finishDate}
            placeholderText="Завершення"
          />
          {formik.touched.finishDate && formik.errors.finishDate ? (
            <span className="error finish">{formik.errors.finishDate}</span>
          ) : null}
        </div>
        <div className="selectGroup">
          <BookSelect
            className="formSelect"
            value={formik.values.book}
            onChange={handleChange}
          />
          {formik.touched.book && formik.errors.book ? (
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
