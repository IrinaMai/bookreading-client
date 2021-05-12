import React from 'react'
import { useDispatch } from 'react-redux'
import Wrapper from './LibraryFormStyle.js'
import { addBookToDb } from '../../redux/operations/bookOperation'
import BookAddSchema from './yup.js'
import { Formik, Field, Form, ErrorMessage } from 'formik'


const initialState = {
  title: '',
  author: '',
  year: '',
  pages: '',
}

const LibraryForm = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Formik
        initialValues={{ ...initialState }}
        validationSchema={BookAddSchema}
        onSubmit={(values, actions) => {
          dispatch(addBookToDb(values))
          actions.resetForm({ ...initialState })
        }}
      >
        {({ values, handleChange, isValid }) => (
          <Form>
            <label htmlFor="title" className="bookLabel bookTitle">
              Назва книги
              <Field
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder="..."
                className="bookInput"
              />              
              <ErrorMessage component="div" name="title" className="bookError"/>
            </label>

            <div className="planshetWrapper">
              <label htmlFor="author" className="bookLabel bookAuthor">
                Автор книги
                <Field
                  id="author"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                  placeholder="..."
                  className="bookInput"
                />
                <ErrorMessage component="div" name="author" className="bookError" />
              </label>

              <label htmlFor="year" className="bookLabel bookNumber">
                Рік випуску
                <Field
                  id="year"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  placeholder="..."
                  autoComplete="on"
                  className="bookInput"
                />
                <ErrorMessage component="div" name="year" className="bookError" />
              </label>

              <label htmlFor="pages" className="bookLabel bookNumber">
                Кількість сторінок
                <Field
                  id="pages"
                  name="pages"
                  value={values.pages}
                  onChange={handleChange}
                  placeholder="..."
                  className="bookInput"
                />
                <ErrorMessage component="div" name="pages" className="bookError" />
              </label>
            </div>

          

            <button type="submit" disabled={!isValid} className="bookButton">
              Додати
            </button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default LibraryForm
