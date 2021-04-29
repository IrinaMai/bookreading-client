import Timer from './Timer'
import { DateTime } from 'luxon'
import TimerContainerSyled from './TimerContainerStyled'
import { useSelector } from 'react-redux'
import {
  getActiveTrainingID,
  getFinishDate,
  getActiveFinishDate,
} from '../../redux/selectors/trainingSelectors'

const TimerContainer = () => {
  const endTimeActive = useSelector(getActiveFinishDate)
  const endTimeBefore = useSelector(getFinishDate)
  const activeTraining = useSelector(getActiveTrainingID)
  const endTime = activeTraining ? endTimeActive : endTimeBefore

  return (
    <TimerContainerSyled>
      <Timer
        title="До закінчення року залишилось"
        // dateTime={DateTime.fromISO('2022-08-12')
        dateTime={DateTime.fromISO('2022-01-01')}
      />
      <Timer
        title="До досягнення мети залишилось"
        dateTime={DateTime.fromISO(endTime)}
      />
    </TimerContainerSyled>
  )
}
export default TimerContainer
