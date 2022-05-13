import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Clonal( { solution }) {

    const {currentGuess, handleKeyUp}=useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyUp)
    
      return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])
    
  return (
    <div>Your Current guess: {currentGuess}</div>
  )
}
