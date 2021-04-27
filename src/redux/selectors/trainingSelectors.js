// const getAllBooks = state => state.training.beforeStart.hardcodeBooks
const getAllBooks = state => state.book
const getBooksList = state => state.training.beforeStart.booksList
const getStartDate = state => state.training.beforeStart.startDate
const getFinishDate = state => state.training.beforeStart.finishDate
const getActiveTrainingID = state => state.training.active._id
const getActiveStartDate = state => state.training.active.startDate
const getActiveFinishDate = state => state.training.active.finishDate

export {
  getAllBooks,
  getBooksList,
  getStartDate,
  getFinishDate,
  getActiveTrainingID,
  getActiveStartDate,
  getActiveFinishDate,
}
