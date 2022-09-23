import React, { useReducer } from 'react'


const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT":
      return {number: state.number + 2, showText: state.showText}
    case "toggleShowText":
      return {number: state.number, showText: !state.showText}
    default:
      return state
  }
}

function LearnUseReducer() {
  const [ state, dispatch] = useReducer(reducer, 
    {number: 0, showText:true})
  return (
    <div>
        <h1>useReducer Hook</h1>
        <p>{state.number}</p>
        <button onClick={()=> {
          dispatch({type: "INCREMENT"});
          dispatch({type: "toggleShowText"});
        }}>Click Here</button>
        {state.showText && <p>This is a Text</p>}
    </div>
  )
}

export default LearnUseReducer