const getAllBooks = state => state.book
const getTrainingBooks = state => state.training.active.books

export {
  getAllBooks,
  getTrainingBooks,
 }
