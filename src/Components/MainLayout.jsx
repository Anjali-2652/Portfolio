import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Contact from './Contact'


const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Contact/> */}
    </div>
  )
}

export default MainLayout
