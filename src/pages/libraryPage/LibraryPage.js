import React from 'react'
import { useDispatch } from 'react-redux'
import LibraryForm from '../../components/library/LibraryForm'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import LibraryEmpty from '../../components/libraryEmpty/LibraryEmpty'
import WellDone from '../../components/wellDone/WellDone'

const LibraryPage = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(modalActions.toggleModal())
  }

  return (
    <div>
      <h2>Library Page</h2>
      <LibraryForm />

      <button onClick={handleClick}>openModal</button>
      <Modal>
        <LibraryEmpty />
      </Modal>
    </div>
  )
}


export default LibraryPage
