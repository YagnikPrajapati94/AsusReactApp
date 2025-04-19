import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate()
    const {register,handleSubmit,reset}=useForm()
    const [admin, setadmin] = useState([])
    const handleForm = async(data)=>{
        try {
            const useradmin = admin.find((element)=> element.admin == data.admin && element.password == data.password)
            if (useradmin) {
                toast.success('Successfully Login')
                setTimeout(() => {
                    navigate("/dash")
                }, 1500);
                reset()
            } else {
                 toast.error('Please Enter Correct Admin and Password')
                reset() 
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    const fetchadmin = async() => {
        try {
            const admin = await axios.get("http://localhost:3000/admin")
            setadmin(admin.data)

        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchadmin()
    }, [])
    
  return (
    <>
        <section>
                <div className="container-fluid p-0">
                    <div className="bg-white mb-4 px-3 py-3">
                        <img src="logo.svg" alt="" />
                        <Link to={"/"} className="float-end">User Portal</Link>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 ">
                                <form className='p-4 form-control border-0 ' onSubmit={handleSubmit(handleForm)}>
                                    <h4 className='mb-4'>Admin Login</h4>
                                    <div className="mb-3">
                                        <label className="form-label">Account</label>
                                        <input type="text" className="form-control shadow-none" {...register("admin")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control shadow-none " {...register("password")} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 form-control shadow-none">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AdminLogin
