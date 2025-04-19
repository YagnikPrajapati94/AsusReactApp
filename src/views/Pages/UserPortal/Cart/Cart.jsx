import React, { useEffect, useState } from 'react'
import UserLayout from '../UserLayout'
import axios from 'axios'
import toast from 'react-hot-toast'

const Cart = () => {
  const [cart, setcart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const username = JSON.parse(localStorage.getItem("username")) || ""
  const user = username[0]

  const fetchcart = async () => {
    try {
      const cartapi = await axios.get("http://localhost:3000/cart")
      const data = cartapi.data

      // Filter only this user's products
      const filteredCart = data.filter((prd) => prd.username[0] === user)

      // Calculate total price
      const prices = filteredCart.map(prd => Number(prd.price))
      const total = prices.reduce((sum, current) => sum + current, 0)
      setTotalPrice(Math.floor(total))

      // Set cart
      setcart(data)
    } catch (error) {
      console.log(error)
    }
  }

  const hanldeRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`)
      toast.success('Successfully Removed!')
      location.reload()
      fetchcart()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchcart()
  }, [])

  // Load Razorpay SDK
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = src
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  // Payment handler
  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js")
    if (!res) {
      alert("Razorpay SDK failed to load.")
      return
    }

    const options = {
      key: "rzp_test_IiEbXPcqSUYDPS", // Replace with your Razorpay Test Key
      amount: totalPrice * 100,
      currency: "INR",
      name: "Asus Store",
      description: "Payment for cart items",
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id

        try {
          const matchedCart = cart.filter(prd => prd.username[0] == user)

          // Post to confirmed with payment ID
          for (const item of matchedCart) {
            await axios.post("http://localhost:3000/confirmed", {
              ...item,
              payment_id: paymentId
            })
          }

          // Delete from cart
          for (const item of matchedCart) {
            await axios.delete(`http://localhost:3000/cart/${item.id}`)
            location.reload()
          }

          toast.success("Payment successful! Order confirmed.")
          fetchcart()
        } catch (error) {
          console.error("Error processing order:", error)
          toast.error("Something went wrong after payment.")
        }
      },
      prefill: {
        name: "Asus User",
      },
      theme: {
        color: "#3399cc"
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <>
      <UserLayout>
        <div className="container-fluid py-3">
          <div className="container">
            <div className="row">
              <div className="col-12 align-items-center py-3 d-flex justify-content-between">
                <p className='fs-4 m-0'>Total Price: <span className='text-warning'>₹{totalPrice}</span></p>
                <button className={`btn btn-primary px-4 text-uppercase ${cart.length > 0 ? "d-block" : "d-none"}`} onClick={handlePayment}>Check Out</button>
              </div>
              {
                cart.length > 0 ? (
                  cart.filter(prd => prd.username[0] === user)
                    .map((prd) => (
                      <div className="col-lg-3 my-lg-0 my-3" key={prd.id}>
                        <div className="card">
                          <img src={prd.url} className="card-img-top w-75 mx-auto img-fluid" alt="..." />
                          <div className="card-body px-4">
                            <h5 className="card-title fs-5">{prd.modal}</h5>
                            <div className='d-flex mb-3 border-top border-bottom py-2 border-warning border-opacity-25'>
                              <p className='m-0 fs-5 text-decoration-line-through text-secondary'>₹{prd.mrp}</p>
                              <p className='m-0 fs-5 text-warning ps-2'>₹{prd.price}</p>
                            </div>
                            <ul className='text-secondary small ps-3'>
                              <li>{prd.processor}</li>
                              <li>{prd.ramsize}GB, {prd.ramtype}</li>
                              <li>{prd.storagesize}GB, {prd.storagetype}</li>
                              <li>{prd.graphic}</li>
                              <li>{prd.windows}</li>
                            </ul>
                            <a href="#" className="btn btn-danger" onClick={() => hanldeRemove(prd.id)}>Remove</a>
                          </div>
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No Data Found</p>
                )
              }
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  )
}

export default Cart
