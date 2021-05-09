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
  getActiveTraining,
} from '../../redux/selectors/trainingSelectors'
import authSelectors from '../../redux/selectors/authSelectors'
import { getTrainingOperation } from '../../redux/operations/trainingOperations'
import { getModalContent } from '../../redux/selectors/modalSelector'
import modalActions from '../../redux/actions/modalActions'
import trainingActions from '../../redux/actions/trainingActions'
import authActions from '../../redux/actions/authActions'
import TimerContainer from '../../components/timer/TimerContainer'
import Modal from '../../components/modal/Modal'
import WellDone from '../../components/wellDone/WellDone'
import FinishModal from '../../components/finishModal/FinishModal'
import notifSelectors from '../../redux/selectors/notifSelectors'
import errorSelector from '../../redux/selectors/errorSelector'
import Notification from '../../components/notification/Notification'

const TrainingPage = () => {
  const booksList = useSelector(getBooksList)
  const activeTrainingID = useSelector(getActiveTrainingID)
  const activeTraining = useSelector(getActiveTraining)
  const userActiveTraining = useSelector(authSelectors.getUserActiveTraining)
  const notification = useSelector(notifSelectors.getNotifState)
	const serverError = useSelector(errorSelector.getError)
  const onlyWidth = useWindowWidth()
  const location = useLocation()
  const dispatch = useDispatch()
  const showModal = useSelector(getModalContent)

  useEffect(() => {
    userActiveTraining && dispatch(getTrainingOperation())
    // eslint-disable-next-line
  }, [userActiveTraining])

  useEffect(() => {
    if (
      activeTraining.pagesRead >= activeTraining.pagesTotal &&
      activeTraining.pagesRead &&
      activeTraining.pagesTotal
    ) {
      dispatch(trainingActions.removeActiveTraining())
      dispatch(trainingActions.removeStartData())
      dispatch(authActions.toggleUserTraining())
      dispatch(modalActions.setModalContent('endOfTraining'))
      dispatch(modalActions.toggleModal())
    }
    // eslint-disable-next-line
  }, [activeTraining])

  return (
    <div className="container">
      <TrainingPageWrapper>
        {onlyWidth < 1280 && activeTrainingID && <TimerContainer />}
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
              {activeTrainingID && <TimerContainer />}
              {!activeTrainingID && <TrainingForm />}
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
        {onlyWidth > 767 && onlyWidth < 1280 && !activeTrainingID && (
          <TrainingForm />
        )}
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
        {onlyWidth < 768 &&
          location.pathname !== '/training/books' &&
          activeTrainingID && <Results />}
        {onlyWidth >= 768 && onlyWidth < 1280 && activeTrainingID && (
          <Results />
        )}
        {/* 1280px positioning bottom section*/}
        {onlyWidth > 1279 && (
          <div className="bottomSection">
            <Chart />
            {activeTrainingID && <Results />}
          </div>
        )}
      </TrainingPageWrapper>
      {showModal === 'wellDone' && (
        <Modal>
          <WellDone />
        </Modal>
      )}
      {showModal === 'endOfTraining' && (
        <Modal>
          <FinishModal />
        </Modal>
      )}
     	<Notification notification={notification} error={serverError}/>
    </div>
  )
}

export default TrainingPage
