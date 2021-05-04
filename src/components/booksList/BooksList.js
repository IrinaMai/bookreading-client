import React from 'react'
import { useWindowWidth } from '@react-hook/window-size'
import { useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/selectors/bookSelectors'
import WillRead from './listItems/willRead/WillRead'
import BeenRead from './listItems/beenRead/BeenRead'
import HeaderTitles from './listItems/willRead/HeaderTitles'
import BeenReadHeaderTytles from './listItems/beenRead/BeenReadHeaderTytles'
import BooksListStyled from './BooksListStyles'


const BooksList = () => {
  const iconOrange = 'orangeIcon'
  const iconGray = 'grayIcon'
  const allBooks = useSelector(getAllBooks)
  const onlyWidth = useWindowWidth()

  return (
    <BooksListStyled>
      <div className='list-container container'>
        <h3 className='read-title'>Прочитано</h3>
        {onlyWidth >= 768 && <BeenReadHeaderTytles />}
        <ul className='willRead-list'>
          {allBooks.map(book => (
            <BeenRead iconColor={iconGray} {...book} key={book._id} />
          ))}
        </ul>
        {allBooks.length > 0 && (
          <>
            <h3 className='read-title'>Читаю</h3>
            {onlyWidth >= 768 && <HeaderTitles />}
            <ul className='willRead-list'>
              {allBooks.map(book => (
                book.status === 'WillRead' && <WillRead iconColor={iconOrange} {...book} key={book._id} />
              ))}
            </ul>
          </>
        )}
        <h3 className='read-title'>Маю намір прочитати</h3>
        {onlyWidth >= 768 && <HeaderTitles />}
        <ul>
          {allBooks.map(book => (
            <WillRead {...book} key={book._id} />
          ))}
        </ul>
      </div>
    </BooksListStyled>
  )
}

export default BooksList