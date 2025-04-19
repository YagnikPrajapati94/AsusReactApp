import axios from 'axios'
import React, {  useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
// import { UserContext } from '../Store/Store'
const Login = () => {

    // const {setlogin} = useContext(UserContext)
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const [userObject, setuserObject] = useState([])
    const handleForm = async (data) => {
        try {
            const user = userObject.find(element => element.email == data.email && element.password == data.password)
            if (user) {
                toast.success('Successfully Login') 
                // console.log(user.username);
                const username = JSON.parse(localStorage.getItem("username")) || []
                username.push(user.username)
                localStorage.setItem("username",JSON.stringify(username))
                //   setlogin(user.username)
            
                
                setTimeout(() => {
                    navigate(`/home`)
                }, 1500);
                
                reset()
            }else{
                toast.error('Please Registred')
                reset()
            }
        } catch (error) {
            console.log(error);
        }
    }
    const fetch = async () => {
        try {
            const userdata = await axios.get("http://localhost:3000/user")
            setuserObject(userdata.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetch()

    }, [])

    return (
        <>
            <section>
                <div className="container-fluid p-0">
                    <div className="bg-white mb-4 px-3 py-3">
                        <img src="logo.svg" alt="" />
                        <Link to={'/admin'} className='float-end'>Admin</Link>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 ">
                                <form className='p-4 form-control border-0 ' onSubmit={handleSubmit(handleForm)}>
                                    <h4 className='mb-4'>Account Login</h4>
                                    <div className="mb-3">
                                        <label className="form-label">Account</label>
                                        <input type="email" className="form-control shadow-none" {...register("email")} required />
                                        <div id="emailHelp" className="form-text">Please enter your email</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control shadow-none " {...register("password")} required />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input shadow-none" required />
                                        <label className="form-check-label" >Remember Me</label>
                                        <Link to={"/sendotp"} className='float-end'>Forget Password</Link>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3 form-control shadow-none">Sign in</button>
                                    <p className='mb-0 mt-3 text-center'>Don't Have ASUS Account?
                                        <Link to={'/register'} className='ps-2'>Sign Up Now</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
