'use client'

import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [count, setCount] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const stop = useRef<boolean>(false)

  useEffect(() => {
    const calculate = () => {
      if (seconds / 60 === 1) {
        setSeconds(seconds - 60)
        setMinutes(minutes + 1)
      }
    }

    calculate()
  }, [seconds])

  useEffect(() => {
    if (count === 60) stop.current = true
    console.log(count)
  }, [count])

  const startTimer = () => {
    const interval = setInterval(() => {
      if (stop.current) {
        clearInterval(interval)
        return
      }

      setCount((prevValue: number) => prevValue + 1)
      setSeconds((prevValue: number) => prevValue + 1)
    }, 999)
  }

  return (
    <div className='w-full h-screen flex flex-col justify-around items-center'>
      <span className='font-bold text-7xl m-10'>{`0${minutes}:${seconds}`}</span>
      <button
        className='bg-black text-white font-medium px-10 py-2 rounded-full cursor-pointer'
        onClick={startTimer}
      >
        Start
      </button>
    </div>
  )
}
