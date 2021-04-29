import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import trainingActions from '../../redux/actions/trainingActions'
import {
  getActiveTrainingID,
  getBooksList,
} from '../../redux/selectors/trainingSelectors'
import TrainingBooksListItem from './trainingBooksListItem.js/TrainingBooksListItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Wrapper from './TrainingBooksListStyled'
import { useWindowWidth } from '@react-hook/window-size'
import { getAllBooks } from '../../redux/selectors/bookSelectors'

const TrainingBooksList = () => {
  const activeTrainingID = useSelector(getActiveTrainingID)
  const allBooks = useSelector(getAllBooks)
  const booksBeforeStart = useSelector(getBooksList)
  const dispatch = useDispatch()
  const onlyWidth = useWindowWidth()

  const booksReading = allBooks.filter(({status}) => status === 'Reading' || status === 'HaveRead' )
  const books = activeTrainingID ? booksReading : booksBeforeStart

  const handleDeleteBook = e => {
    const { id } = e.currentTarget.dataset
    dispatch(trainingActions.deleteBook(id))
  }

  return (
    <Wrapper
      tablet={onlyWidth > 767}
      desktop={onlyWidth > 1279}
      books={books.length > 3}
    >
      {!books.length && (
        <TransitionGroup component="ul">
          <TrainingBooksListItem />
        </TransitionGroup>
      )}
      <TransitionGroup component="ul">
        {books.map(book => (
          <CSSTransition key={book._id} timeout={250} classNames="bookListItem">
            <TrainingBooksListItem {...book} onDeleteBook={handleDeleteBook} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  )
}

export default TrainingBooksList
