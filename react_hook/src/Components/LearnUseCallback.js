import React, { useCallback, useState } from 'react'
import Child from './Child';

function LearnUseCallback() {
    const [data, setData] = useState("Yo, ...");
    const [toggle, setToggle] = useState(false);

    const returnComment = useCallback(
    (name) => {
        return data + name;
    }, [data])

  return (
    <div>
        <h1>useCallback Hook</h1>
        <Child returnComment={returnComment}/>
        <button onClick={() => {
            setToggle(!toggle);
        }}>
            Toggle
        </button>
        {toggle && <h2>toggle</h2>}
    </div>
  )
}

export default LearnUseCallback