import React from 'react'
import { Link } from 'react-router-dom'

function TheHeader() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/15">User</Link>
        </li>
      </ul>
    </div>
  )
}

export default TheHeader
