import React from 'react'
import { useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/selectors/trainingSelectors.js'
import WillRead from './listItems/WillRead'
import BooksListStyled from './BooksListStyles'
import { map } from 'lodash-es'


const BooksList = () => {
  const books = useSelector(getAllBooks)
  console.log(books);

  return (
    <BooksListStyled>
      <div className='list-container container'>
        <div className='alreadyRead-container'>
          <h3 className='read-title'>Маю намір прочитати</h3>
          <div className='list-header'>
            <span className='header-name header-item'>Назва книги</span>
            <span className='header-author header-item'>Автор</span>
            <span className='header-year header-item'>Рік</span>
            <span className='header-pages header-item'>Стор.</span>
          </div>
          <ul>
            {books.map(book => (
              <WillRead {...book} key={book._id} />
            ))}
          </ul>
        </div>
      </div>
    </BooksListStyled>
  )
};

export default BooksList