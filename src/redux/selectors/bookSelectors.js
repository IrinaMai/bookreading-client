const getAllBooks = state => state.book
// const currentBook = state =>
const getTrainingBooks = state => state.training.active.books

export {
  getAllBooks,
  getTrainingBooks,
 }
