import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getBooks } from '../../redux/selectors/trainingSelectors'
import TrainingBooksListItem from './trainingBooksListItem.js/TrainingBooksListItem'
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import Wrapper from './TrainingBooksListStyled'

const TrainingBooksList = () => {
  // const dispatch = useDispatch()
  const books = useSelector(getBooks)

  return (
    <Wrapper>
      <TransitionGroup component="ul">
        {books.map(book => (
          <CSSTransition key={book.id} timeout={250} classNames="bookListItem"  onEnter={() => console.log('onEnter event')}>
            <TrainingBooksListItem {...book} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Wrapper>
  )
}

export default TrainingBooksList
