import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/campus" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/student" activeClassName="active">Students</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
