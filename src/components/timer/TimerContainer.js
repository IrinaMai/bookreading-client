import Timer from './Timer'
import { DateTime } from 'luxon'
import TimerContainerSyled from './TimerContainerStyled'
const TimerContainer = () => {
  return (
    <TimerContainerSyled>
      <Timer
        title="До закінчення року залишилось"
        dateTime={DateTime.fromISO('2022-08-12')}
      />
      <Timer
        title="До досягнення мети залишилось"
        dateTime={DateTime.fromISO('2021-08-12')}
      />
    </TimerContainerSyled>
  )
}
export default TimerContainer
