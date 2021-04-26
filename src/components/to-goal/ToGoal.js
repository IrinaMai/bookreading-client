import { connect } from 'react-redux'
import ToGoalStyled from './ToGoalStyled'
import { useSelector } from 'react-redux'

const Goal = () => {
  //////////////////////////////////////////////// Selectors ////////////////////////
  const booksToRead = useSelector(
    state => state.training.beforeStart.booksCount
  )
  const trainingPeriodDays = useSelector(
    state => state.training.beforeStart.daysCount
  )
  const activeTraining = useSelector(
    state => state.training.beforeStart.activeTraining
  )
  /////////////////////////////////////////////////////////////////////////////////////////

  return (
    <ToGoalStyled>
      <h2 className={activeTraining ? 'bookTitleMore' : 'bookTitle'}>
        Моя мета прочитати
      </h2>
      <div
        className={
          activeTraining ? 'booksCounterContainerMore' : 'booksCounterContainer'
        }
      >
        <div className={activeTraining ? 'booksCounterMore' : 'booksCounter'}>
          <p className={activeTraining ? 'counterNumberMore' : 'counterNumber'}>
            {booksToRead}
          </p>
        </div>

        <div className={activeTraining ? 'booksCounterMore' : 'booksCounter'}>
          <p className={activeTraining ? 'counterNumberMore' : 'counterNumber'}>
            {trainingPeriodDays}
          </p>
        </div>

        {activeTraining ? (
          <div className="booksCounterMore">
            <p className="counterNumberActive">12</p>
          </div>
        ) : (
          ''
        )}
        <div
          className={
            activeTraining
              ? 'counterLabelContainerMore'
              : 'counterLabelContainer'
          }
        >
          <p className={activeTraining ? 'counterLabelMore' : 'counterLabel'}>
            Кількість <br></br> книжок
          </p>
          <p className={activeTraining ? 'counterLabelMore' : 'counterLabel'}>
            Кількість <br></br>днів
          </p>
          {activeTraining ? (
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

// const mapStateToProps = state => ({
//     booksToRead: getTrainingBooksCount(state),
//     // trainingPeriodDays: getTrainingDaysGoal(state),
//     booksLeft: getTrainingUnreadBooksCount(state),
// });
// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Goal);
export default Goal
