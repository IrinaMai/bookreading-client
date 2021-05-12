import { DateTime } from 'luxon'
import React from 'react'
import TimerStyled from './TimerStyled'
import { useEffect, useState } from 'react'

const useTime = (refreshCycle = 1000) => {
  const [now, setNow] = useState(getTime())

  useEffect(() => {
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle)
    return () => clearInterval(intervalId)
    // eslint-disable-next-line
  }, [refreshCycle, setInterval, clearInterval, setNow, getTime])

  return now
}

const getTime = () => {
  return DateTime.local()
}

export const Timer = ({ title, dateTime }) => {
  const now = useTime(1000)
  const end = dateTime
  const duration = end
    .diff(now, ['days', 'hours', 'minutes', 'seconds', 'milliseconds'])
    .toObject()
  return (
    <TimerStyled>
      <p className="title">{title}</p>
      <div className="timerContaienr">
        <div className="partContainer">
          <p className="number">{dateTime.c !== null ? duration.days : '0'}</p>
          <span>ДН</span>
        </div>
        <b className="dots">:</b>
        <div className="partContainer">
          <p className="number">{dateTime.c !== null ? duration.hours : '0'}</p>
          <span>ГОД</span>
        </div>
        <b className="dots">:</b>
        <div className="partContainer">
          <p className="number">
            {dateTime.c !== null ? duration.minutes : '0'}
          </p>
          <span>ХВ</span>
        </div>
        <b className="dots">:</b>
        <div className="partContainer">
          <p className="number">
            {dateTime.c !== null ? duration.seconds : '0'}
          </p>
          <span>СЕК</span>
        </div>
      </div>
    </TimerStyled>
  )
}
export default Timer
