import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import modalActions from '../../redux/actions/modalActions'
import CompleteBookIcon from '../icons/CompleteBookIcon'
import FinishModalStyled from './FinishModalStyled'

const FinishModal = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = () => {
    history.push('/library')
    dispatch(modalActions.clearModalContent())
    dispatch(modalActions.offModal())
  }
  return (
    <FinishModalStyled>
      <CompleteBookIcon className="finishIcon" />
      <p className="finishText">
        Вітаємо! <br /> Ви завершили тренування.
      </p>
      <button type="button" className="finishButton" onClick={handleClick}>
        Почати нове тренування
      </button>
    </FinishModalStyled>
  )
}

export default FinishModal
