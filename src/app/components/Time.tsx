import React from 'react'
import { iceland } from './ui/fonts'

const DateTimeDisplay = ({ value, type }: { value: any; type: String }) => {
  return (
    <div
      className={`${iceland.className} flex flex-col md:w-36 w-10 items-center justify-center space-y-5 neonText`}
    >
      <div className={`md:text-9xl text-white`}>{value}</div>
      <div className="md:text-5xl">{type}</div>
    </div>
  )
}

export default DateTimeDisplay
