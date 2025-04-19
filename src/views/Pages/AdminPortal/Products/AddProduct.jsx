import React from 'react'
import AdminLayout from '../AdminLayout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm()
    const handleForm = async (data) => {
        try {
            const productapi = await axios.post("http://localhost:3000/product", data)
            console.log(productapi.data);
            toast.success('Successfully Added!');
            reset()
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <>
            <AdminLayout>
                <div className="container-fluid py-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <form action="" className='form-control add-product  border-0 p-4' onSubmit={handleSubmit(handleForm)}>
                                <p className='fs-4 text-center text-light bg-dark mb-4 rounded-3'>Add Product</p>
                                <input type="text" className='form-control my-3' placeholder="Enter Laptop Modal Name" {...register("modal")} required />

                                <select name="laptoptype" className='form-control' id="laptoptype" {...register("laptoptype")} required>
                                    <option disabled selected value="">Select Laptop Type</option>
                                    <option value="Zenbook">Zenbook (Premium / Business)</option>
                                    <option value="VivoBook">VivoBook (Everyday / Student)</option>
                                    <option value="ROG">ROG - Republic of Gamers (High-end Gaming)</option>
                                    <option value="TUF">TUF Gaming (Budget Gaming)</option>
                                    <option value="ExpertBook">ExpertBook (Business / Lightweight)</option>
                                    <option value="ProArt">ProArt StudioBook (Creatives / Design)</option>
                                    <option value="Chromebook">Chromebook (Web-based / Budget)</option>
                                </select>
                                <input type="text" className='form-control my-3' placeholder="Enter Img Url" {...register("url")} required />
                                <div className="input-group gap-3">
                                    <input type="text" className='form-control' placeholder="Enter MRP" {...register("mrp")} required />
                                    <input type="text" className='form-control' placeholder="Enter Selling Price" {...register("price")} required />
                                </div>

                                <input type="text" className='form-control my-3' placeholder="Enter Processor" {...register("processor")} required />
                                <div className="input-group my-3 gap-3">
                                    <input type="text" className='form-control ' placeholder="Enter Ram" {...register("ramsize")} required />
                                    <select name="" className='form-control' id="" {...register("ramtype")} required >
                                        <option disabled selected value="">Select Ram Type</option>
                                        <option value="DDR4">DDR4</option>
                                        <option value="DDR5">DDR5</option>
                                    </select>
                                </div>
                                <div className="input-group my-3 gap-3">
                                    <input type="text" className='form-control ' placeholder="Enter Storage" {...register("storagesize")} required />
                                    <select name="" className='form-control' id="" {...register("storagetype")} required >
                                        <option disabled selected value="">Select Storage Type</option>
                                        <option value="SSD">SSD</option>
                                        <option value="HDD">HDD</option>
                                    </select>
                                </div>
                                <input type="text" className='form-control my-3' placeholder="Enter Graphics Card" {...register("graphic")} required />
                                <select name="" className='form-control' id="" {...register("windows")} required >
                                    <option disabled selected value="">Select Windows</option>
                                    <option value="Windows 11">Windows 11</option>
                                    <option value="Windows 10">Windows 10</option>
                                </select>
                                <button className='btn btn-outline-success form-control text-uppercase fw-bold my-3'>Add Product</button>


                            </form>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default AddProduct
