import React from 'react'
import { useDispatch } from 'react-redux'
import Wrapper from './LibraryFormStyle.js'
import { addBookToDb } from '../../redux/operations/bookOperation'
import BookAddSchema from './yup.js'
import { Formik, Field, Form, ErrorMessage } from 'formik'
// import LibraryButton from "./libraryButton"

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
        {({ errors, touched, values, handleChange, isValid }) => (
          <Form>
            <label htmlFor="title" class="bookLabel bookTitle">
              {' '}
              Назва книги
              <Field
                id="title"
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder="..."
                autofocus
                class="bookInput"
              />
              <ErrorMessage component="div" name="title" class="bookError" />
            </label>

            <div class="planshetWrapper">
              <label htmlFor="author" class="bookLabel bookAuthor">
                Автор книги
                <Field
                  id="author"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                  placeholder="..."
                  class="bookInput"
                />
                <ErrorMessage component="div" name="author" class="bookError" />
              </label>

              <label htmlFor="year" class="bookLabel bookNumber">
                Рік випуску
                <Field
                  id="year"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  placeholder="..."
                  autocomplete="on"
                  class="bookInput"
                />
                <ErrorMessage component="div" name="year" class="bookError" />
              </label>

              <label htmlFor="pages" class="bookLabel bookNumber">
                Кількість сторінок
                <Field
                  id="pages"
                  name="pages"
                  value={values.pages}
                  onChange={handleChange}
                  placeholder="..."
                  class="bookInput"
                />
                <ErrorMessage component="div" name="pages" class="bookError" />
              </label>
            </div>

            {/* <LibraryButton disabled = {!isValid}/>  */}

            <button type="submit" class="bookButton">
              Додати
            </button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default LibraryForm
