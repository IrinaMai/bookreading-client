const getAllBooks = state => state.book.filter(item => item.isDeleted === false)
const getUnfilteredBook = state => state.book
const getTrainingBooks = state => state.training.active.books

export {
  getAllBooks,
  getTrainingBooks,
  getUnfilteredBook
 }
