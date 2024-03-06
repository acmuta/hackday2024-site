'use client'

import { useEffect, useState } from 'react'

const useCountdown = (targetDate: any) => {
  // Initialize with static values
  const initialTimeLeft = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  }

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)

  useEffect(() => {
    const countDownDate = new Date(targetDate).getTime()

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, '0')
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, '0')
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0')
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0')

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

export { useCountdown }
