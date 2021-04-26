import React from 'react'
import { useDispatch } from 'react-redux'
import LibraryForm from '../../components/library/LibraryForm'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import LibraryEmpty from '../../components/libraryEmpty/LibraryEmpty'
import WellDone from '../../components/wellDone/WellDone'
import Resume from '../../components/resume/Resume'

const LibraryPage = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(modalActions.toggleModal())
  }

  return (
    <div>
      <LibraryForm />
      <button onClick={handleClick}>Резюме</button>
      <Modal>
        <Resume />
      </Modal>
    </div>
  )
}

export default LibraryPage
