import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from '../../redux/actions/trainingActions'
import { getBooks } from '../../redux/selectors/trainingSelectors'
import TrainingBooksListItem from './trainingBooksListItem.js/TrainingBooksListItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Wrapper from './TrainingBooksListStyled'

const TrainingBooksList = () => {
  const books = useSelector(getBooks)
  const dispatch = useDispatch()

  const handleDeleteBook = e => {
    const { id } = e.currentTarget.dataset
    dispatch(deleteBook(id))
  }

  return (
    <Wrapper>
      <TransitionGroup component="ul">
        {books.map(book => (
          <CSSTransition key={book.id} timeout={250} classNames="bookListItem">
            <TrainingBooksListItem
              {...book}
              onDeleteBook={handleDeleteBook}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  )
}

export default TrainingBooksList
