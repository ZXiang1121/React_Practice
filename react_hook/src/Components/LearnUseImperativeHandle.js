import React, { useRef } from 'react'
import Button from './Button'

function LearnUseImperativeHandle() {
    const buttonRef = useRef(null)
  return (
    <div>
        <h1>useImperativeHandle Hook</h1>
        <button onClick={() => {buttonRef.current.alterToggle()}}>
            Button From Parent
        </button>
        <Button ref={buttonRef}/>
    </div>
  )
}

export default LearnUseImperativeHandle