const getAllBooks = state => state.book.filter(item => item.isDeleted === false)
const getTrainingBooks = state => state.training.active.books

export {
  getAllBooks,
  getTrainingBooks,
 }
