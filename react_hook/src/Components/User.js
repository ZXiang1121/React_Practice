import React, {useContext} from 'react'
import { AppContext } from './LearnUseContext';

function User() {
    const { username } = useContext(AppContext)
  return (
    <div>User:{username}</div>
  )
}

export default User