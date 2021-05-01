import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LibraryForm from '../../components/library/LibraryForm'
import BooksList from '../../components/booksList/BooksList'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import LibraryEmpty from '../../components/libraryEmpty/LibraryEmpty'
import WellDone from '../../components/wellDone/WellDone'
import Resume from '../../components/resume/Resume'
import { getModalContent } from '../../redux/selectors/modalSelector'
import { getAllBooks } from '../../redux/selectors/bookSelectors'
import WillRead from '../../components/booksList/listItems/WillRead'

const LibraryPage = () => {  
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)
  const bookList = useSelector(getAllBooks)

  const handleClick = () => {
    dispatch(modalActions.setModalContent('resume'))
    dispatch(modalActions.toggleModal())
  }
  
  useEffect(() => {
    if (!bookList.length) {     
      dispatch(modalActions.setModalContent('libraryEmpty'))
      && dispatch(modalActions.toggleModal())
    }
    return () => {
      dispatch(modalActions.clearModalContent())
      dispatch(modalActions.offModal())
    }
  }, [bookList.length])

  

  return (
    <div>
      <LibraryForm />
      {showModal === 'libraryEmpty' && (
        <Modal>
          <LibraryEmpty />
        </Modal>
      )}

      {bookList.length &&  <WillRead/> }

 
      <button onClick={handleClick}>Резюме</button>

      {showModal === 'resume' && (
        <Modal>
          <Resume />
        </Modal>
      )}
    </div>
  )
}

export default LibraryPage
