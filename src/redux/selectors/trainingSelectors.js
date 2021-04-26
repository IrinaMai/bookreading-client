// const getAllBooks = state => state.training.beforeStart.hardcodeBooks
const getAllBooks = state => state.book
const getBooksList = state => state.training.beforeStart.booksList
const getStartDate = state => state.training.beforeStart.startDate
const getFinishDate = state => state.training.beforeStart.finishDate


export { getAllBooks, getBooksList, getStartDate, getFinishDate };
