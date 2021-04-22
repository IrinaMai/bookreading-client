 import * as Yup from "yup";

 const BookAddSchema = Yup.object().shape({
   title: Yup.string()
     .min(2, 'Too Short!')
     .max(120, 'Too Long!')
     .required('Required'),
   author: Yup.string()
     .min(2, 'Too Short!')
     .max(120, 'Too Long!'),
   year: Yup.number()
     .integer()
     .min(1800)
     .max(2021),
   pages: Yup.number()
     .integer()
     .positive()
     .min(1)
     .max(99999)
     .required("Required")
 });

 export default BookAddSchema