import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authActions from '../../redux/actions/authActions'
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
    dispatch(authActions.toggleUserTraining())
  }

  return (
    <ButtonStyled type="button" onClick={handleClick}>
      Почати тренування
    </ButtonStyled>
  )
}

export default StartTrainingBtn
