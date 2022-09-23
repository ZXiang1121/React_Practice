import React, { useEffect, useState } from 'react'
import axios from "axios";

function LearnUseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
      setData(response.data[0].email);
      console.log("API was called")

    });

  }, [count]);
    
  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>{data}</p>
      <p>{count}</p>
        <button onClick={()=> {setCount(count + 1)}}>Increment</button>
    </div>
  )
}

export default LearnUseEffect