import { DateTime } from 'luxon'
import React from 'react'
import TimerStyled from './TimerStyled'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const useTime = (refreshCycle = 1000) => {
  const [now, setNow] = useState(getTime())

  useEffect(() => {
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle)
    return () => clearInterval(intervalId)
  }, [refreshCycle, setInterval, clearInterval, setNow, getTime])

  return now
}

const getTime = () => {
  return DateTime.local()
}

export const Timer = ({ title, dateTime }) => {
  const now = useTime(1000)
  const end = dateTime
  // DateTime.fromISO('2022-08-12')
  const duration = end
    .diff(now, ['days', 'hours', 'minutes', 'seconds', 'milliseconds'])
    .toObject()

  return (
    <TimerStyled>
      <p className="title">{title}</p>
      <div className="timerContaienr">
        <div className="timer">
          <p className="number">
            {duration.days}
            <b className="dots">:</b>
          </p>
          <p className="number">
            {duration.hours}
            <b className="dots">:</b>
          </p>
          <p className="number">
            {duration.minutes}
            <b className="dots">:</b>
          </p>
          <p className="number">{duration.seconds}</p>
        </div>
        <div className="words">
          <span>ДН</span>
          <span>ГОД</span>
          <span>ХВ</span>
          <span>СЕК</span>
        </div>
      </div>
    </TimerStyled>
  )
}
export default Timer
