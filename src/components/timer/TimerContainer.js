import Timer from './Timer'
import { DateTime } from 'luxon'
import TimerContainerSyled from './TimerContainerStyled'
import { useSelector } from 'react-redux'

const TimerContainer = () => {
  const endTime = useSelector(state => state.training.active.finishDate)
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
