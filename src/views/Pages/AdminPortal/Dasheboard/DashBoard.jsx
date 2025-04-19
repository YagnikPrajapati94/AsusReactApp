import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import DashCard from '../../../Layout/Component/AdminComponent/Card/DashCard'
import axios from 'axios'

const DashBoard = () => {
  const [users, setusers] = useState([])
  const [product, setproduct] = useState([])
  const [sell, setsell] = useState([])
  const [earning, setearning] = useState("$ 0.00")

  // Fetch all data
  const fecthuser = async () => {
    try {
      const userapi = await axios.get("http://localhost:3000/user")
      const productapi = await axios.get("http://localhost:3000/product")
      const confirmedapi = await axios.get("http://localhost:3000/confirmed")

      setusers(userapi.data)
      setproduct(productapi.data)
      setsell(confirmedapi.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Calculate total earning from sell
  const handleEarning = () => {
    const prices = sell.map(product => Number(product.price)) // convert to number
    const total = prices.reduce((sum, curr) => sum + curr, 0)
    const final = `₹ ${Math.floor(total)}.00`
    setearning(final) 
  }

  // Run on initial render
  useEffect(() => {
    fecthuser()
  }, [])

  // Run when sell data is updated
  useEffect(() => {
    handleEarning()
  }, [sell])

  return (
    <>
      <AdminLayout>
        <div className="container-fluid py-3">
          <div className="row">
            <DashCard titlenum={`${users.length}`} title={`Total User : `} className={"bg-info"} />
            <DashCard titlenum={`${product.length}`} title={`Total Products :`} className={"bg-warning"} />
            <DashCard titlenum={`${earning}`} title={`Total Earning :`} className={"bg-dark"} />
            <DashCard titlenum={`${sell.length}`} title={`Total Sell : `} className={"bg-danger"} />
          </div>
        </div>
      </AdminLayout>
    </>
  )
}

export default DashBoard
