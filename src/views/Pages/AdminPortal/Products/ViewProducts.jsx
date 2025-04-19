import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import axios from 'axios'
import toast from 'react-hot-toast'
import EditModal from './EditModal'

const ViewProducts = () => {
  const [product, setproduct] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null) // 👈 to hold selected product


  const fetchproducts = async () => {
    try {
      const productapi = await axios.get("http://localhost:3000/product")
      setproduct(productapi.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDel = async(id)=> {
    try {
        const productapi = await axios.delete(`http://localhost:3000/product/${id}`)
        toast.success('Successfully Deleted') 
        fetchproducts()
    } catch (error) {
        console.log(error);

    }
  }

  useEffect(() => {
    fetchproducts()
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
                      <th style={{ minWidth: "50px" }}>ID</th>
                      <th style={{ minWidth: "100px" }}>Image</th>
                      <th style={{ minWidth: "120px" }}>Model</th>
                      <th style={{ minWidth: "100px" }}>MRP</th>
                      <th style={{ minWidth: "120px" }}>Selling Price</th>
                      <th style={{ minWidth: "140px" }}>Processor</th>
                      <th style={{ minWidth: "140px" }}>RAM</th>
                      <th style={{ minWidth: "120px" }}>Storage</th>
                      <th style={{ minWidth: "140px" }}>Graphics</th>
                      <th style={{ minWidth: "100px" }}>Windows</th>
                      <th style={{ minWidth: "150px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product.length > 0 ? (
                        product.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                              <img src={item.url} alt="img" className='img-thumbnail' style={{ width: "80px", height: "auto" }} />
                            </td>
                            <td>{item.modal}</td>
                            <td className='text-decoration-line-through text-secondary'>₹{item.mrp}</td>
                            <td className='text-success fw-bold'>₹{item.price}</td>
                            <td>{item.processor}</td>
                            <td>{item.ramsize}GB, {item.ramtype}</td>
                            <td>{item.storagesize}GB</td>
                            <td>{item.graphic}</td>
                            <td>{item.windows}</td>
                            <td>
                              <div className="d-flex justify-content-center gap-2">
                                <button className='btn btn-sm btn-success' onClick={()=> setSelectedProduct(item.id)}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                <button className='btn btn-sm btn-danger'  onClick={()=>handleDel(item.id)}>Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="11">No data found</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <EditModal id={selectedProduct}/>
          </div>
        </div>
      </AdminLayout>
    </>
  )
}

export default ViewProducts
