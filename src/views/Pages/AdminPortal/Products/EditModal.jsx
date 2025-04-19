import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const EditModal = ({ id }) => {
  const { register, handleSubmit, reset } = useForm()

  // Submit updated product
  const handleForm = async (data) => {
    try {
      await axios.put(`http://localhost:3000/product/${id}`, data)  // ✅ using PUT for update
      toast.success('Product Updated Successfully!')
      location.reload()
      

    } catch (error) {
      console.log(error)
      toast.error('Failed to update product')
    }
  }

  // Fetch single product by ID & prefill form
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/product/${id}`)
      const product = response.data
      reset({
        modal: product.modal,
        laptoptype: product.laptoptype,
        url: product.url,
        mrp: product.mrp,
        price: product.price,
        processor: product.processor,
        ramsize: product.ramsize,
        ramtype: product.ramtype,
        storagesize: product.storagesize,
        storagetype: product.storagetype,
        graphic: product.graphic,
        windows: product.windows
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (id) {
      fetchProduct()
    }
  }, [id])

  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-uppercase" id="staticBackdropLabel">Update Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid py-3">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <form className='form-control border-0 px-4' onSubmit={handleSubmit(handleForm)}>

                      <input type="text" className='form-control mb-3' placeholder="Enter Laptop Modal Name" {...register("modal")} required />

                      <select className='form-control' {...register("laptoptype")} required>
                        <option value="">Select Laptop Type</option>
                        <option value="Zenbook">Zenbook</option>
                        <option value="VivoBook">VivoBook</option>
                        <option value="ROG">ROG</option>
                        <option value="TUF">TUF</option>
                        <option value="ExpertBook">ExpertBook</option>
                        <option value="ProArt">ProArt</option>
                        <option value="Chromebook">Chromebook</option>
                      </select>

                      <input type="text" className='form-control my-3' placeholder="Enter Img Url" {...register("url")} required />

                      <div className="input-group gap-3">
                        <input type="text" className='form-control' placeholder="Enter MRP" {...register("mrp")} required />
                        <input type="text" className='form-control' placeholder="Enter Selling Price" {...register("price")} required />
                      </div>

                      <input type="text" className='form-control my-3' placeholder="Enter Processor" {...register("processor")} required />

                      <div className="input-group my-3 gap-3">
                        <input type="text" className='form-control' placeholder="Enter Ram" {...register("ramsize")} required />
                        <select className='form-control' {...register("ramtype")} required >
                          <option value="">Select Ram Type</option>
                          <option value="DDR4">DDR4</option>
                          <option value="DDR5">DDR5</option>
                        </select>
                      </div>

                      <div className="input-group my-3 gap-3">
                        <input type="text" className='form-control' placeholder="Enter Storage" {...register("storagesize")} required />
                        <select className='form-control' {...register("storagetype")} required >
                          <option value="">Select Storage Type</option>
                          <option value="SSD">SSD</option>
                          <option value="HDD">HDD</option>
                        </select>
                      </div>

                      <input type="text" className='form-control my-3' placeholder="Enter Graphics Card" {...register("graphic")} required />

                      <select className='form-control' {...register("windows")} required >
                        <option value="">Select Windows</option>
                        <option value="Windows 11">Windows 11</option>
                        <option value="Windows 10">Windows 10</option>
                      </select>

                      <button  className='btn btn-outline-warning form-control text-uppercase fw-bold mt-3'>Update Product</button>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditModal
