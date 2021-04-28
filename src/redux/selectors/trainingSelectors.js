// const getAllBooks = state => state.training.beforeStart.hardcodeBooks
const getBooksList = state => state.training.beforeStart.booksList
const getStartDate = state => state.training.beforeStart.startDate
const getFinishDate = state => state.training.beforeStart.finishDate
const getActiveTrainingID = state => state.training.active._id
const getActiveStartDate = state => state.training.active.startDate
const getActiveFinishDate = state => state.training.active.finishDate

export {
  getBooksList,
  getStartDate,
  getFinishDate,
  getActiveTrainingID,
  getActiveStartDate,
  getActiveFinishDate,
}
