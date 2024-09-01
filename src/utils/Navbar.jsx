import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item"><Link to={"/Home"}  className="navbar-link">Home</Link></li>
      <li className="navbar-item"><Link to={"/About"} className="navbar-link">About</Link></li>
      <li className="navbar-item"><Link to={"/Services"} className="navbar-link">Services</Link></li>
      <li className="navbar-item"><Link to={"/Profile"} className="navbar-link">Profile</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar