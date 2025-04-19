import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Forget = () => {
    const { register, handleSubmit, reset } = useForm()
    const [user, setuser] = useState([])
    const navigate = useNavigate()

    // Fetch all users from API
    const fetchuser = async () => {
        try {
            const userapi = await axios.get("http://localhost:3000/user")
            setuser(userapi.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Handle form submit
    const handleForm = async (data) => {
        try {
            // Find user by email
            const matchUser = user.find((item) => item.email === data.email)

            if (matchUser) {
                // If user exists, update password
                const updatedUser = { ...matchUser, password: data.password }

                await axios.put(`http://localhost:3000/user/${matchUser.id}`, updatedUser)

                toast.success("Password reset successfully!")
                setTimeout(() => {
                    navigate("/")
                }, 1500);
                reset()
            } else {
                toast.error("Email not found!")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    useEffect(() => {
        fetchuser()
    }, [])

    return (
        <>
            <section>
                <div className="container-fluid p-0">
                    <div className="bg-white mb-4 px-3 py-3">
                        <img src="logo.svg" alt="logo" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <form className='p-4 form-control border-0' onSubmit={handleSubmit(handleForm)}>
                                    <h4 className='mb-4'>Forget Password</h4>

                                    <div className="mb-3">
                                        <label className="form-label">Account (Email)</label>
                                        <input type="email" className="form-control shadow-none" {...register("email")} required />
                                        <div id="emailHelp" className="form-text">Please enter your registered email</div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Enter New Password</label>
                                        <input type="password" className="form-control shadow-none" {...register("password")} required />
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input shadow-none" required />
                                        <label className="form-check-label">Remember Me</label>
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-3 form-control shadow-none">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forget
