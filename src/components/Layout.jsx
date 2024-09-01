import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../utils/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout