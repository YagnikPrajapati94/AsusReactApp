import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import axios from 'axios'

const ViewSelling = () => {
  const [selling, setselling] = useState([])

  const fetchselling = async () => {
    try {
      const confirmedapi = await axios.get("http://localhost:3000/confirmed")
      setselling(confirmedapi.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchselling()
  }, [])

  return (
    <>
      <AdminLayout>
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className='table table-bordered table-hover align-middle text-center'>
                  <thead className='table-dark'>
                    <tr>
                      <th style={{ minWidth: "60px" }}>ID</th>
                      <th style={{ minWidth: "140px" }}>Username</th>
                      <th style={{ minWidth: "100px" }}>Image</th>
                      <th style={{ minWidth: "140px" }}>Model</th>
                      <th style={{ minWidth: "100px" }}>MRP</th>
                      <th style={{ minWidth: "130px" }}>Selling Price</th>
                      <th style={{ minWidth: "220px" }}>Payment ID</th>
                      <th style={{ minWidth: "120px" }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      selling.length > 0 ? (
                        selling.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.username}</td>
                            <td>
                              <img src={item.url} alt="product-img" className='img-thumbnail' style={{ width: "80px", height: "auto" }} />
                            </td>
                            <td>{item.modal}</td>
                            <td className='text-decoration-line-through text-secondary'>₹{item.mrp}</td>
                            <td className='text-success fw-bold'>₹{item.price}</td>
                            <td>{item.payment_id}</td>
                            <td>
                              <span className='badge bg-success px-3 py-2'>Confirmed</span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className='text-center'>No data found</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  )
}

export default ViewSelling
