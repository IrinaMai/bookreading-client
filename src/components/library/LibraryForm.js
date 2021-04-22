import React from 'react';
import { useDispatch } from 'react-redux';
// import FormBook from './LibraryFormStyle.js'
import addBookToDb from '../../redux/operations/bookOperation'
// import DatePicker from 'react-datepicker'
import BookAddSchema from "./yup.js";
import { Formik, Field, Form, ErrorMessage  } from 'formik';


const initialState = {
    title: "",
    author: "",
    year: "",
    pages: "",
}


const LibraryForm = () => {
    const dispatch = useDispatch();


  return  <>
    <Formik
      initialValues={{ ...initialState }}
      validationSchema = {BookAddSchema}

      onSubmit={ (values, actions) => {
        dispatch(addBookToDb(values));
        // console.log(values)
        actions.resetForm({ ...initialState })
      }}
    >
    {({
          errors,
          touched,
          values,
          handleChange,
        //   isValid,
        //   dirty,
        //   isSubmitting,
        }) => (
      <Form>
        <label htmlFor="title"> Назва книги</label>
        <Field id="title" name="title" value={values.title} onChange={handleChange} placeholder="..." />
        <ErrorMessage component="div" name="title" />

        <label htmlFor="author">Автор книги</label>
        <Field id="author" name="author" value={values.author} onChange={handleChange} placeholder="..." />
        <ErrorMessage component="div" name="author" />

        <label htmlFor="year">Рік випуску</label>
        <Field id="year" name="year" value={values.year} onChange={handleChange}  placeholder="..."/>
        <ErrorMessage component="div" name="year" />

        <label htmlFor="pages">Кількість сторінок</label>
        <Field id="pages" name="pages" value={values.pages} onChange={handleChange} placeholder="..."/>
         <ErrorMessage component="div" name="pages" />

        <button type="submit">Додати</button>
      </Form>)}
    </Formik>

  </>;
};

export default LibraryForm;

