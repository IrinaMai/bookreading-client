import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import WellDoneIcon from '../../components/icons/WellDoneIcon'
import WellDoneWrapper from './WellDone.styled'

const WellDone = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(modalActions.offModal())
    dispatch(modalActions.clearModalContent())
    document.body.style.overflow = 'visible'
  }

  return (
      <WellDoneWrapper>
        <WellDoneIcon />
        <div className="textWrapper">
          <p className="wellDoneText">
            Ти молодчина, <br />
            але потрібно швидше!
          </p>
          <p className="wellDoneText">Наступного разу тобі все вдасться 🙂</p>
        </div>
        <button className="mobileButton" type="button" onClick={closeModal}>
          Ok
        </button>
      </WellDoneWrapper>
  )
}

export default WellDone
