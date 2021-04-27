import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import ResumeWrapper from './Resume.styled'
import StarRating from '../rating/StarRating'

const Resume = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(modalActions.offModal())
    dispatch(modalActions.clearModalContent())
    document.body.style.overflow = 'visible'
  }
  return (
    <>
      <ResumeWrapper>
        <p className="resumeText">Обрати рейтинг книги</p>
        <StarRating />
        <p className="resumeContent">Резюме</p>
        <textarea className="resumeTextArea" placeholder="..."></textarea>
        <div className="buttonWrapper">
          <button className="buttonBack" type="button" onClick={closeModal}>
            Назад
          </button>
          <button className="buttonSave" type="button">
            Зберегти
          </button>
        </div>
      </ResumeWrapper>
    </>
  )
}

export default Resume
