import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteFooter from '../component/SiteFooter'
import SiteHeader from '../component/SiteHeader'

const Site = () => {
  return (
    <>
        <SiteHeader />
        <main className="container">
          <Outlet />
        </main>
        <SiteFooter /> 
    </>
  )
}

export default Site
