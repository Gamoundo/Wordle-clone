import React from 'react'

export default function Row({guess}) {
  
    if (guess) {
        return (
            <div className='row'>
               {guess.map((l, i) => {
                  return <div key={i} className={l.color}> {l.key}</div>
               })}
           </div>
         )  
    }
    
    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}