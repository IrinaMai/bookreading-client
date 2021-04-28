import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LibraryForm from '../../components/library/LibraryForm'
import BooksList from '../../components/booksList/BooksList'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import LibraryEmpty from '../../components/libraryEmpty/LibraryEmpty'
import WellDone from '../../components/wellDone/WellDone'
import Resume from '../../components/resume/Resume'
import { getModalContent } from '../../redux/selectors/modalSelector'

const LibraryPage = () => {
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)
  const handleClick = () => {
    dispatch(modalActions.setModalContent("resume"))
    dispatch(modalActions.toggleModal())
  }

  return (
    <div>
      <LibraryForm />
      <button onClick={handleClick}>Резюме</button>
      
        {showModal === "resume" && <Modal><Resume /></Modal>}
      <BooksList/>
    </div>
  )
}

export default LibraryPage
