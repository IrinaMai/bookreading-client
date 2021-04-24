import { useWindowWidth } from '@react-hook/window-size'
import React from 'react'
import { useLocation } from 'react-router'
import AddButton from '../../components/addButton/AddButton'
import BackButton from '../../components/backButton/BackButton'
import BooksListContainer from '../../components/trainingBooksList/booksListContainer/BooksListContainer'
import TrainingBooksList from '../../components/trainingBooksList/TrainingBooksList'
import TrainingForm from '../../components/trainingForm/TrainingForm'
import TrainingPageWrapper from './TrainingPageStyled'

const TrainingPage = () => {
  const onlyWidth = useWindowWidth()
  const location = useLocation()

  return (
    <div className="container">
      <TrainingPageWrapper>
        {onlyWidth < 768 && location.pathname === '/training/books' && <BackButton/>}
        {onlyWidth < 768 && location.pathname === '/training/books' && <TrainingForm />}
        {onlyWidth > 768 && <TrainingForm />}
        {onlyWidth > 767 && (
          <BooksListContainer>
            <TrainingBooksList />
          </BooksListContainer>
        )}
        {onlyWidth < 768 && location.pathname !== '/training/books' && <TrainingBooksList />}
        {onlyWidth < 768 && location.pathname !== '/training/books' && <AddButton/>}
      </TrainingPageWrapper>
    </div>
  )
}

export default TrainingPage
