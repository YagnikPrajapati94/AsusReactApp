import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
    const handleLogout = ()=> {
        navigate("/admin")
    }
    return (
        <>
            <nav className="navbar py-3 admin-nav bg-white navbar-expand-lg sticky-top ">
                <div className="container-fluid">
                    <a className="navbar-brand d-lg-none d-block" href="#"><img src="logo.svg" className='img-fluid' alt="" /></a>
                    <a href="" className='ms-auto px-3 fs-5 text-decoration-none text-info' data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item text-danger" onClick={()=>handleLogout()} href="#">Logout</a></li>
                        {/* <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Nav
