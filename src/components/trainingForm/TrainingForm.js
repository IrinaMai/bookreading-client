import { useFormik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import { DateTime } from 'luxon'
import trainingActions from '../../redux/actions/trainingActions'
import convertDate from '../../utils/dateConverter'
import BookSelect from '../bookSelect/BookSelect'
import InputDatePicker from './inputDatePicker/InputDatePicker'
import FormContainer from './TrainingFormStyled'
import {
  getFinishDate,
  getStartDate,
} from '../../redux/selectors/trainingSelectors'

const TrainingForm = () => {
  const [option, setOption] = useState('')
  const startDate = useSelector(getStartDate)
  const finishDate = useSelector(getFinishDate)
  const dispatch = useDispatch()
  const history = useHistory()
  const onlyWidth = useWindowWidth()
  const selectRef = useRef()

  useEffect(() => {
    formik.setFieldValue('startDate', startDate)
    formik.setFieldValue('finishDate', finishDate)
    // eslint-disable-next-line
  }, [])

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
    onSubmit: () => {
      dispatch(trainingActions.addBook(option))

      selectRef.current.select.setValue('')
      formik.resetForm()
      formik.setFieldValue('startDate', startDate)
      formik.setFieldValue('finishDate', finishDate)

      onlyWidth < 768 && history.push('/training')
    },
  })

  const handleChange = value => {
    formik.setFieldValue('book', value.value)
    setOption(value)
  }

  const handleStartDate = date => {
    formik.setFieldValue('startDate', date)
    dispatch(trainingActions.setStartDate(convertDate(date)))
  }
  const handleFinishtDate = date => {
    formik.setFieldValue('finishDate', date)
    dispatch(trainingActions.setFinishDate(convertDate(date)))
  }

  return (
    <FormContainer>
      <form className="form" onSubmit={formik.handleSubmit} autoComplete="off">
        <p className="formTitle">Моє тренування</p>
        <div className="inputGroup">
          <InputDatePicker
            name="startDate"
            pickedDate={startDate ? new Date(startDate) : ''}
            onChange={handleStartDate}
            placeholderText="Початок"
            onBlur={formik.handleBlur}
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <span className="error start">{formik.errors.startDate}</span>
          ) : null}
          <InputDatePicker
            name="finishDate"
            pickedDate={finishDate ? new Date(finishDate) : ''}
            onChange={handleFinishtDate}
            placeholderText="Завершення"
            onBlur={formik.handleBlur}
          />
          {formik.touched.finishDate && formik.errors.finishDate ? (
            <span className="error finish">{formik.errors.finishDate}</span>
          ) : null}
        </div>
        <div className="selectGroup">
          <BookSelect
            selectRef={selectRef}
            className="formSelect"
            value={formik.values.book}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.book && formik.errors.book ? (
            <span className="error">{formik.errors.book}</span>
          ) : null}
          <button
            className="formButton"
            type="submit"
            disabled={!formik.dirty}
          >
            Додати
          </button>
        </div>
      </form>
    </FormContainer>
  )
}

export default TrainingForm

