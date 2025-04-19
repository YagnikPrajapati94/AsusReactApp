import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const [alluser, setalluser] = useState([])
    const handleForm = async (data) => {
        if (data.password !== data.repwd) {
            toast.error('Password Does not Match')
            return
        }
        try {
            const user = alluser.find(element => element.email === data.email)
            const isUsernameExist = alluser.find(user => user.username === data.username)
            if (user) {
                toast.error('This Email Address is Already Registred!')
                reset()
                return
            }
            if (isUsernameExist) {
                toast.error('This Username is Already Taken!')
                reset()
                return
            }
            delete data.repwd
            const userdata = await axios.post("http://localhost:3000/user", data)
            toast.success('Successfully Registred')
            reset()
            setTimeout(() => {
                navigate("/")
            }, 1500);




        } catch (error) {
            console.log(error);
        }
    }
    const fetchuser = async () => {
        try {
            const userdata = await axios.get("http://localhost:3000/user")
            setalluser(userdata.data)

        } catch (error) {
            console.log(error);

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
                        <img src="logo.svg" alt="" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 ">
                                <form className='p-4 form-control border-0 ' onSubmit={handleSubmit(handleForm)}>
                                    <h4 className='mb-3 text-center'>Sign Up Now</h4>
                                    <p className='small text-secondary mb-4 text-center'>Please note that ASUS account is same as ROG account. If you have either account, you can  <Link to={'/'} className='ps-2'>Log in</Link> directly without registering a new one.</p>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control shadow-none" {...register("username")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Account</label>
                                        <input type="email" className="form-control shadow-none" {...register("email")} required />
                                        <div id="emailHelp" className="form-text">Please enter your email</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control shadow-none " {...register("password")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Re-enter Password:</label>
                                        <input type="password" className="form-control shadow-none " {...register("repwd")} required />
                                        <div className='form-text'>Input your password again.</div>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input shadow-none" required />
                                        <label className="form-check-label" >I agree to all the following items and Privacy Policy.</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 form-control shadow-none">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
