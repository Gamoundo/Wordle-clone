import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Clonal( { solution }) {

    const {currentGuess, turn, handleKeyUp}=useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyUp)
    
      return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])
    
  return (
    <div>
        <div> number of turns: {turn}</div>
        <div> word you are trying to guess: {solution}</div>
        <div>Your Current guess: {currentGuess}</div>
    </div>
    
  )
}
