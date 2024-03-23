import React from 'react'
import { iceland } from './ui/fonts'

const DateTimeDisplay = ({ value, type }: { value: any; type: String }) => {
  return (
    <div
      className={`${iceland.className} flex flex-col md:w-36 w-10 items-center justify-center neonText`}
    >
      <div className="md:text-8xl">{value}</div>
      <div className="md:text-3xl">{type}</div>
    </div>
  )
}

export default DateTimeDisplay
