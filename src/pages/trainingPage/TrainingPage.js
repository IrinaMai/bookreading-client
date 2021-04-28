import { useWindowWidth } from '@react-hook/window-size'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import AddButton from '../../components/addButton/AddButton'
import BackButton from '../../components/backButton/BackButton'
import Results from '../../components/results/Results'
import BooksListContainer from '../../components/trainingBooksList/booksListContainer/BooksListContainer'
import TrainingBooksList from '../../components/trainingBooksList/TrainingBooksList'
import TrainingForm from '../../components/trainingForm/TrainingForm'
import TrainingPageWrapper from './TrainingPageStyled'
import ToGoal from '../../components/to-goal/ToGoal'
import Chart from '../../components/chart/Chart'
import StartTrainingBtn from '../../components/startTrainingBtn/StartTrainingBtn'
import {
  getBooksList,
  getActiveTrainingID,
} from '../../redux/selectors/trainingSelectors'
import { getTrainingOperation } from '../../redux/operations/trainingOperations'

const TrainingPage = () => {
  const booksList = useSelector(getBooksList)
  const activeTrainingID = useSelector(getActiveTrainingID)
  const onlyWidth = useWindowWidth()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrainingOperation())
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <TrainingPageWrapper>
        {onlyWidth < 768 && location.pathname !== '/training/books' && (
          <ToGoal />
        )}

        {onlyWidth >= 768 && onlyWidth < 1280 && <ToGoal />}

        {onlyWidth < 768 && location.pathname === '/training/books' && (
          <BackButton />
        )}
        {onlyWidth < 768 && location.pathname === '/training/books' && (
          <TrainingForm />
        )}
        {/* 1280px positioning top section*/}
        {onlyWidth > 1279 && (
          <div className="topSection">
            <div className="sectionGroup">
              <TrainingForm />
              <BooksListContainer>
                <TrainingBooksList />
              </BooksListContainer>
              {onlyWidth > 1279 &&
                booksList.length > 0 &&
                !activeTrainingID && <StartTrainingBtn />}
            </div>
            <ToGoal />
          </div>
        )}
        {/* ---------------------------------- */}
        {onlyWidth > 767 && onlyWidth < 1280 && <TrainingForm />}
        {onlyWidth > 767 && onlyWidth < 1280 && (
          <BooksListContainer>
            <TrainingBooksList />
          </BooksListContainer>
        )}
        {onlyWidth < 768 && location.pathname !== '/training/books' && (
          <TrainingBooksList />
        )}
        {onlyWidth < 768 &&
          location.pathname !== '/training/books' &&
          booksList.length > 0 &&
          !activeTrainingID && <StartTrainingBtn />}
        {onlyWidth >= 768 &&
          onlyWidth < 1280 &&
          booksList.length > 0 &&
          !activeTrainingID && <StartTrainingBtn />}

        {onlyWidth < 768 &&
          location.pathname !== '/training/books' &&
          !activeTrainingID && <AddButton />}
        {onlyWidth < 768 && location.pathname !== '/training/books' && (
          <Chart />
        )}
        {onlyWidth >= 768 && onlyWidth < 1280 && <Chart />}
        {onlyWidth < 768 && location.pathname !== '/training/books' && activeTrainingID && (
          <Results />
        )}
        {onlyWidth >= 768 && onlyWidth < 1280 && activeTrainingID && <Results />}
        {/* 1280px positioning bottom section*/}
        {onlyWidth > 1279 && (
          <div className="bottomSection">
            <Chart />
            {activeTrainingID && <Results />}
          </div>
        )}
        {/* ---------------------------------- */}
      </TrainingPageWrapper>
    </div>
  )
}

export default TrainingPage
