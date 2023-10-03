import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../component/AdminFooter'
import AdminHeader from '../component/AdminHeader'

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <Outlet />
      </main>
      <AdminFooter />
    </>
  )
}

export default Admin
