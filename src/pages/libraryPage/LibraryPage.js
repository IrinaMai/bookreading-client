import React from 'react'
import { useDispatch } from 'react-redux'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'

const LibraryPage = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(modalActions.toggleModal())
  }

  return (
    <div>
      <h2>Library Page</h2>
      <button onClick={handleClick}>openModal</button>
      <button onClick={handleClick}>Резюме</button>
      <Modal />
    </div>
  )
}

export default LibraryPage
