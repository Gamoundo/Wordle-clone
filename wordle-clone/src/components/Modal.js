import React from 'react'

export default function Modal({turn, solution, correct, }) {
  
  
  
    return (
        <div className='modal'>
            {correct && (
            <div>
                <h1> Winner</h1>
                <p> It took you {turn} turns to win</p>
      
            </div>
         )
            
        }
        { !correct && (<div>
            <h1> Guess time is over.</h1>
            <p> After {turn} turns you didn't win</p>
            <p> The answer was {solution}</p>
        </div>)}
        </div>
         
      
        
  )
}
