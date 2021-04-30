import React from 'react'
import { useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/selectors/bookSelectors'
import WillRead from './listItems/WillRead'
import HeaderTitles from './listItems/HeaderTitles'
import BooksListStyled from './BooksListStyles'


const BooksList = () => {
  const iconColor = 'orangeIcon'
  const books = useSelector(getAllBooks)
  console.log(books);

  return (
    <BooksListStyled>
      <div className='list-container container'>
          <h3 className='read-title'>Читаю</h3>
          <HeaderTitles/>
          <ul className='willRead-list'>
            {books.map(book => (
              <WillRead iconColor={iconColor} {...book} key={book._id} />
              ))}
          </ul>
          <h3 className='read-title'>Маю намір прочитати</h3>
              <HeaderTitles/>
          <ul>
            {books.map(book => (
              <WillRead {...book} key={book._id} />
            ))}
          </ul>
      </div>
    </BooksListStyled>
  )
};

export default BooksList