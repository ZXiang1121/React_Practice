import React, { useState, createContext } from 'react'
import User from './User'
import Login from './Login'

export const AppContext = createContext(null);

function LearnUseContext() {
    const [username, setUsername] = useState('');


  return (
    <AppContext.Provider value={{username, setUsername}}>
        <h1>Context Hook</h1>
        <Login/>
        <User/>
    </AppContext.Provider>
  )
}

export default LearnUseContext