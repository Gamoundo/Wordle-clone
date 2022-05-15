import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'

export default function Clonal( { solution }) {

    const {currentGuess, turn, guesses, correct, handleKeyUp}=useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyUp)
    
      return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])
    
    useEffect( () => {
        console.log(guesses, correct)
    }, [guesses, correct])


  return (
    <div>
      
        <div> number of turns: {turn}</div>
        <div> word you are trying to guess: {solution}</div>
        <div>Your Current guess: {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
    </div>
    
  )
}
