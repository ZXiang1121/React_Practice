import React, { useRef } from 'react'

function LearnUseRef() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = '';
    }
  return (
    <div>
        <h1>useRef Hook</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
        <p>Name: </p>
    </div>
  )
}

export default LearnUseRef