 import * as Yup from "yup";

 const BookAddSchema = Yup.object().shape({
   title: Yup.string()
     .min(2, 'Назва книжки закоротка.')
     .max(120, 'Назва занадто довга.')
     .required('Введіть назву книжки.'),
   author: Yup.string()
     .min(2, 'І\'мя автора закоротке.')
     .max(120, 'І\'мя автора занадто довге'),
   year: Yup.number()
     .integer()
     .min(1000, "Ви читаєте манускрипт?")
     .max(2021, "Ця книжка ще не зявилась."),
   pages: Yup.number()
     .integer("Введіть ціле число.")
     .positive("Кількість сторінок більше 1.")
     .min(1, "Кількість сторінок більше 1.")
     .max(99999, "Кількість сторінок менша 99999.")
     .required("Заповніть кількість сторінок.")
 });

 export default BookAddSchema