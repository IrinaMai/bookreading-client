import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrainingOperation } from '../../redux/operations/trainingOperations'
import {
  getBooksList,
  getFinishDate,
  getStartDate,
} from '../../redux/selectors/trainingSelectors'
import ButtonStyled from './StartTrainingBtnStyled'

const StartTrainingBtn = () => {
  const startDate = useSelector(getStartDate)
  const finishDate = useSelector(getFinishDate)
  const books = useSelector(getBooksList)
  const booksIdArr = books.map(book => book._id)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addTrainingOperation( startDate, finishDate, booksIdArr ))
  }

  return (
    <ButtonStyled type="button" onClick={handleClick}>
      Почати тренування
    </ButtonStyled>
  )
}

export default StartTrainingBtn
