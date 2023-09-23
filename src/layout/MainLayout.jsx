import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'


//children routes
const MainLayout = () => {
  return (
    <>
     <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout