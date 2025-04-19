import React from 'react'
import Nav from '../../Layout/Component/AdminComponent/Navigation/Nav'
import SideBar from '../../Layout/Component/AdminComponent/Navigation/SideBar'

const AdminLayout = ({children}) => {
  return (
    <>
    <Nav/>
      <main className='admin-main'>
        {children}
      </main>
    <SideBar/>
    </>
  )
}

export default AdminLayout
