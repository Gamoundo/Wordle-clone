import React, { useEffect, useState } from 'react'
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

    const [letters, setLetters] =useState(
      [
        {key: 'q'},
        {key: 'w'},
        {key: 'e'},
        {key: 'r'},
        {key: 't'},
        {key: 'y'},
        {key: 'u'},
        {key: 'i'},
        {key: 'o'},
        {key: 'p'},
        {key: 'a'},
        {key: 's'},
        {key: 'd'},
        {key: 'f'},
        {key: 'g'},
        {key: 'h'},
        {key: 'j'},
        {key: 'k'},
        {key: 'l'},
        {key: 'z'},
        {key: 'x'},
        {key: 'c'},
        {key: 'v'},
        {key: 'b'},
        {key: 'n'},
        {key: 'm'},
      ]
    )

  return (
    <div>
      
        <div> number of turns: {turn}</div>
        <div> word you are trying to guess: {solution}</div>
        
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <div className='keypad'>
      {letters.map((l) => {
      return  <div key={l.key}>{l.key}</div>
      })}
      </div>
      
    </div>
    
  )
}
