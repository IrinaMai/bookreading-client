import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import modalActions from '../../redux/actions/modalActions'
import ResumeWrapper from './Resume.styled'
import StarRating from '../rating/StarRating'
import { patchBookAtDB } from '../../redux/operations/bookOperation'
import { getAllBooks } from '../../redux/selectors/bookSelectors'


const initialValue = {
  id: '',
  review: '',
}

const Resume = ({bookId}) => {
  const [rating, setRating] = useState('')
  const [book, setBook] = useState({ ...initialValue, id: bookId})
  const dispatch = useDispatch()
  const bookList = useSelector(getAllBooks)


  useEffect(() => {
    if (bookId) {
      const currentBook = bookList.find(item => item._id === bookId)
      setBook({ ...book, review: currentBook.review })
      setRating(currentBook.rating)
    }
    // eslint-disable-next-line
  }, [])
  
  const closeModal = () => {
    dispatch(modalActions.offModal())
    dispatch(modalActions.clearModalContent())
  }

  
  const handleClick = e => {
    e.preventDefault()
    dispatch(patchBookAtDB(book.id, { review: book.review, rating: rating }))
    setRating(0)
    setBook({ ...initialValue })
    closeModal()
  }
  const reviewChng = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <ResumeWrapper>
        <p className="resumeText">Обрати рейтинг книги</p>
        <StarRating rating={rating} setRating={setRating} />
        <p className="resumeContent">Резюме</p>
        <textarea
          className="resumeTextArea"
          placeholder="..."
          name="review"
          value={book.review || ''}
          onChange={reviewChng}
        ></textarea>
        <div className="buttonWrapper">
          <button className="buttonBack" type="button" onClick={closeModal}>
            Назад
          </button>
          <button className="buttonSave" type="button" onClick={handleClick}>
            Зберегти
          </button>
        </div>
      </ResumeWrapper>
    </>
  )
}

export default Resume
