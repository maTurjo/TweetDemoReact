import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="#">Home</Link>
      </nav>
    </div>
  )
}
