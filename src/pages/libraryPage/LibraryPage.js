import React from 'react'
import { useDispatch } from 'react-redux'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import LibraryEmpty from '../../components/libraryEmpty/LibraryEmpty'

const LibraryPage = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(modalActions.toggleModal())
  }

  return (
    <div>
      <h2>Library Page</h2>
      <button onClick={handleClick}>openModal</button>
      <Modal>
        <LibraryEmpty />
      </Modal>
      <button onClick={handleClick}>Резюме</button>
    </div>
  )
}

export default LibraryPage
