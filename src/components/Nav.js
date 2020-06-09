import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-brand" disabled>Navbar</button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className='nav-item'>
          <NavLink className='nav-link' to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/add' activeClassName='active'>
            ADD QUESTION
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/LeaderBoard' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>
    </ul>
  </div>
</nav>
  )
} 
