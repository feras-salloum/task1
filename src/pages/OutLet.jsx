// import React from 'react'
import { NavBar } from './Navpar'
import { Footer1 } from './Footer'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

export default function OutLet() {
  return (
    <div className="App">
    <NavBar/>
    <div className="container">
      <Outlet></Outlet>
    </div>
    <Footer1/>
  </div>
  )
}


