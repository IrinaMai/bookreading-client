import { useWindowWidth } from '@react-hook/window-size'
import React from 'react'
import BooksListContainer from '../../components/trainingBooksList/booksListContainer/BooksListContainer'
import TrainingBooksList from '../../components/trainingBooksList/TrainingBooksList'
import TrainingForm from '../../components/trainingForm/TrainingForm'
import TrainingPageWrapper from './TrainingPageStyled'

const TrainingPage = () => {
  const onlyWidth = useWindowWidth()
  return (
    <div className="container">
      <TrainingPageWrapper>
        <h2>Training Page</h2>
        <TrainingForm />
        {onlyWidth > 767 && (
          <BooksListContainer>
            <TrainingBooksList />
          </BooksListContainer>
        )}
        {onlyWidth < 768 && <TrainingBooksList />}
      </TrainingPageWrapper>
    </div>
  )
}

export default TrainingPage
