import React, { useEffect } from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import AddButton from '../../components/addButton/AddButton'
import BackButton from '../../components/backButton/BackButton'
import LibraryForm from '../../components/library/LibraryForm'
import BooksList from '../../components/booksList/BooksList'
import Modal from '../../components/modal/Modal'
import modalActions from '../../redux/actions/modalActions'
import LibraryEmpty from '../../components/libraryEmpty/LibraryEmpty'
import { getModalContent } from '../../redux/selectors/modalSelector'
import { getAllBooks , getUnfilteredBook} from '../../redux/selectors/bookSelectors'
import GoonButton from '../../components/goonButton/GoonButon'
import LibraryWrapper from "./LibraryPageStyled"
import { Redirect  } from 'react-router-dom';



const LibraryPage = () => {
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)
  const bookList = useSelector(getAllBooks)
  const unfilteredBok = useSelector(getUnfilteredBook)
  const onlyWidth = useWindowWidth()
  const location = useLocation()




  useEffect(() => {
    if (!bookList.length) {
      dispatch(modalActions.setModalContent('libraryEmpty')) &&
      dispatch(modalActions.toggleModal())
    }
    return () => {
      dispatch(modalActions.clearModalContent())
      dispatch(modalActions.offModal())
    }
    // eslint-disable-next-line
  }, [bookList.length])

  return (
    <LibraryWrapper booklist={bookList.length}>
      {onlyWidth < 768 && location.pathname === '/library/books' && (
        <div className="container">
          {unfilteredBok.length > 0 && <BackButton />}
          <LibraryForm />
          { !unfilteredBok.length && showModal === 'libraryEmpty' &&(
          <Modal>
            <LibraryEmpty />
          </Modal>
        )}

        </div>
      )}
      
      {onlyWidth < 768 && bookList.length ===0  && (<Redirect  to='/library/books' />) }

      {onlyWidth < 768 && location.pathname === '/library' && bookList.length> 0 &&(
         <>
           <BooksList />
            <GoonButton />
            <AddButton />
            </>
      )}


{onlyWidth >= 768 && location.pathname === '/library' &&
<>
<LibraryForm />
      {showModal === 'libraryEmpty' && (
        <Modal>
          <LibraryEmpty />
        </Modal>
      )}
      <BooksList />
      {bookList.length > 0 && <GoonButton />}
</>

}
  
    </LibraryWrapper>
  )
}

export default LibraryPage
