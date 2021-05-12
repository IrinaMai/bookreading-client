import React, {useState} from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/selectors/bookSelectors'
import WillRead from './listItems/willRead/WillRead'
import BeenRead from './listItems/beenRead/BeenRead'
import HeaderTitles from './listItems/willRead/HeaderTitles'
import BeenReadHeaderTytles from './listItems/beenRead/BeenReadHeaderTytles'
import BooksListStyled from './BooksListStyles'

import Modal from '../modal/Modal'
import Resume from '../resume/Resume'
import { getModalContent } from '../../redux/selectors/modalSelector'


const BooksList = () => {
  const iconOrange = 'orangeIcon'
  const iconGray = 'grayIcon'
  const allBooks = useSelector(getAllBooks)
  const onlyWidth = useWindowWidth()
  const [bookId, setBookId] = useState('')

  const showModal = useSelector(getModalContent)

  return (
    <BooksListStyled>
      <div className='list-container container'>
        {allBooks.some(book => book.status === 'HaveRead') && (
          <>
            <h3 className='read-title'>Прочитано</h3>
            {onlyWidth >= 768 && <BeenReadHeaderTytles />}
            <ul className='willRead-list'>
              {allBooks.map(book => (
                book.status === 'HaveRead' && <BeenRead iconColor={iconGray} {...book} key={book._id} setBookId={setBookId} />
              ))}
            </ul>
          </>
        )}
        {allBooks.some(book => book.status === 'Reading') && (
          <>
            <h3 className='read-title'>Читаю</h3>
            {onlyWidth >= 768 && <HeaderTitles />}
            <ul className='willRead-list'>
              {allBooks.map(book => (
                book.status === 'Reading' && <WillRead iconColor={iconOrange} {...book} key={book._id} />
              ))}
            </ul>
          </>
        )}
        {allBooks.some(book => book.status === 'WillRead') && (
          <>
            <h3 className='read-title'>Маю намір прочитати</h3>
            {onlyWidth >= 768 && <HeaderTitles />}
            <ul>
              {allBooks.map(book => (
                book.status === 'WillRead' && <WillRead {...book} key={book._id} />
              ))}
            </ul>
          </>
        )}
      </div>
            {showModal === 'resume' && (
        <Modal>
          <Resume bookId={ bookId}/>
        </Modal>
      )}
    </BooksListStyled>
  )
}

export default BooksList