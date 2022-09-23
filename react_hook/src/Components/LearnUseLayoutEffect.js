import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LearnUseLayoutEffect() {
    const divRef = useRef(null);

    useLayoutEffect(() => {
        console.log(divRef.current.value)
    }, []);

    useEffect(() => {
        divRef.current.value = "Hello"
    }, []);

  return (
    <div>
        <h1>useLayoutEffect Hook</h1>
        <input ref={divRef} type="text" value="ZX" style={{ width: 400, height: 100, border: "1px solid black" }}/>
    </div>
  )
}

export default LearnUseLayoutEffect