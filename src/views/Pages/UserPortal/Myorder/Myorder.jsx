import React, { useEffect, useState } from 'react'
import UserLayout from '../UserLayout'
import axios from 'axios'

const Myorder = () => {
    const [order, setorder] = useState([])
    const username = JSON.parse(localStorage.getItem("username")) || ""
    const user = username[0]
    const fetchorder = async()=> {
        try {
            const orderapi = await axios.get("http://localhost:3000/confirmed")
            setorder(orderapi.data)

        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchorder()
    }, [])
    
  return (
    <>
      <UserLayout>
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className='fs-5 ps-1 fw-bold'>My Order :-</p>
                    </div>
                    {
                         order.length > 0 ? (
                            order.filter(prd => prd.username[0] === user)
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
                                        <li>Payment-id : {prd.payment_id}</li>
                                      </ul>
                                      <a  className="text-success text-decoration-none">Confirmed</a>
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

export default Myorder
