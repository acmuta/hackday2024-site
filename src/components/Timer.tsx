'use client'

import React from 'react'
import DateTimeDisplay from './Time'
import { useCountdown } from './hooks/useCountdown'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <div>IT IS TIME</div>
      <div>?</div>
    </div>
  )
}

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  'use client'
  return (
    <div className="flex flex-row space-x-10">
      <DateTimeDisplay value={days} type={'Days'} />
      <DateTimeDisplay value={hours} type={'Hours'} />
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  )
}

const CountdownTimer = ({ targetDate }: any) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  // if (
  //   parseInt(days, 10) +
  //     parseInt(hours, 10) +
  //     parseInt(minutes, 10) +
  //     parseInt(seconds, 10) <=
  //   0
  // ) {
  //   return <ExpiredNotice />
  // } else {
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  )
  // }
}

export default CountdownTimer
