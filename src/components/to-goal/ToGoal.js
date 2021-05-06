import ToGoalStyled from './ToGoalStyled'
import { useSelector } from 'react-redux'
import {
  getActiveBooks,
  getActiveTrainingID,
  getBooksList,
} from '../../redux/selectors/trainingSelectors'
import { DateTime } from 'luxon'

const Goal = () => {
  const endActive = DateTime.fromISO(
    useSelector(state => state.training.active.finishDate)
  )
  const startActive = DateTime.fromISO(
    useSelector(state => state.training.active.startDate)
  )
  const daysDiffActive = endActive.diff(startActive, 'days').toObject()
  const endBefore = DateTime.fromISO(
    useSelector(state => state.training.beforeStart.finishDate)
  )
  const startBefore = DateTime.fromISO(
    useSelector(state => state.training.beforeStart.startDate)
  )
  const daysDiffBefore = endBefore.diff(startBefore, 'days').toObject()

  const booksBeforeStart = useSelector(getBooksList)
  const activeTrainingID = useSelector(getActiveTrainingID)
  const activeBooks = useSelector(getActiveBooks)
  const booksReading = activeBooks.filter(({ status }) => status === 'Reading')
  // const books = activeTrainingID ? booksReading.length : booksBeforeStart.length
  // const daysLeft = activeTrainingID ? daysDiffActive.days : daysDiffBefore.days
  const defaultDays = '0'
  const booksCount = booksBeforeStart ? booksBeforeStart.length : defaultDays
  const daysCount = daysDiffBefore.days ? daysDiffBefore.days : defaultDays

  return (
    <ToGoalStyled>
      <h2 className={activeTrainingID ? 'bookTitleMore' : 'bookTitle'}>
        Моя мета прочитати
      </h2>
      <div
        className={
          activeTrainingID
            ? 'booksCounterContainerMore'
            : 'booksCounterContainer'
        }
      >
        <div className={activeTrainingID ? 'booksCounterMore' : 'booksCounter'}>
          <p
            className={activeTrainingID ? 'counterNumberMore' : 'counterNumber'}
          >
            {activeTrainingID ? booksBeforeStart.length : booksCount}
          </p>
        </div>

        <div className={activeTrainingID ? 'booksCounterMore' : 'booksCounter'}>
          <p
            className={activeTrainingID ? 'counterNumberMore' : 'counterNumber'}
          >
            {activeTrainingID ? daysDiffActive.days : daysCount}
          </p>
        </div>

        {activeTrainingID ? (
          <div className="booksCounterMore">
            <p className="counterNumberActive">{booksReading.length}</p>
          </div>
        ) : (
          ''
        )}
        <div
          className={
            activeTrainingID
              ? 'counterLabelContainerMore'
              : 'counterLabelContainer'
          }
        >
          <p className={activeTrainingID ? 'counterLabelMore' : 'counterLabel'}>
            Кількість <br></br> книжок
          </p>
          <p className={activeTrainingID ? 'counterLabelMore' : 'counterLabel'}>
            Кількість <br></br>днів
          </p>
          {activeTrainingID ? (
            <p className="counterLabelMore">
              Залишилося <br></br> книжок
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </ToGoalStyled>
  )
}

export default Goal
