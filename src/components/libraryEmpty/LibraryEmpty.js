import React from 'react'
import { useDispatch } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import LibraryIcon from '../icons/LibraryIcon'
import ArrowVector from '../icons/ArrowVector'
import Flag from '../icons/Flag'
import LibraryEmptyWrapper from './LibraryEmpty.styled'

const LibraryEmpty = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(modalActions.offModal())
    document.body.style.overflow = 'visible'
  }

  return (
    <>
      <LibraryEmptyWrapper>
        <h2 className="libraryEmptyTitle">Крок 1.</h2>
        <div className="iconWrapper">
          <LibraryIcon />
          <p className="libraryEmptyText">Створіть особисту бібліотеку</p>
        </div>
        <div className="arrowWrapper">
          <ArrowVector />
          <p className="libraryEmptyIntention">
            Додайте до неї книжки, які маєте намір прочитати.
          </p>
        </div>
        <h2 className="libraryEmptyTitle">Крок 2.</h2>
        <div className="iconWrapper">
          <Flag />
          <p className="libraryEmptyText">Сформуйте своє перше тренування</p>
        </div>
        <div className="arrowWrapper">
          <ArrowVector />
          <p className="libraryEmptyGoal">
            Визначте ціль, оберіть період, розпочинайте тренування.
          </p>
        </div>
        <button className="mobileButton" type="button" onClick={closeModal}>
          Ok
        </button>
      </LibraryEmptyWrapper>
    </>
  )
}

export default LibraryEmpty
