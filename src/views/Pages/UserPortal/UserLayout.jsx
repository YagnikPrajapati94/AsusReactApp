import React, { Children } from 'react'
import Navbar from '../../Layout/Header/Navbar'
import Footer from '../../Layout/Footer/Footer'
import { useParams } from 'react-router-dom'

const UserLayout = ({children}) => {
  const {username} = useParams()
  return (
    <>
      <Navbar loginuser={username}/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default UserLayout
