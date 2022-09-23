import React, {useState} from 'react'

function LearnUseState() {
    const [ counter, setCounter] = useState(0);
    const [ inputValue, setInputValue] = useState("Hi");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
      }
      
  return (
    <div>
        <h1>useState Hook</h1>
        <h2>Increment Number</h2>
        <p>{counter}</p>
        <button onClick={()=> {setCounter(counter + 1)}}>Increment</button>
        
        <h2>Change Input</h2>
        <input onChange={onChange} placeholder='enter something...'/>
        <p>{inputValue}</p>
    </div>
  )
}

export default LearnUseState