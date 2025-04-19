import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()
    // Function to check if the link is active
    const isActive = (path) => {
        return location.pathname === path ? 'btn-dark' : 'btn-outline-dark';
    };
    return (
        <>
            <div className="offcanvas offcanvas-start admin-offcanvas border-0" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header px-4  ">
                    <img src="logo.svg" className='img-fluid pt-2' width={"90px"} alt="" />
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                    <button type="button" className="btn-close d-lg-none d-block" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <button className={` shadow-none  btn form-control ${isActive('/dash')} my-2`} onClick={() => navigate("/dash")}>DashBoard</button>
                    <button className={` shadow-none  btn form-control ${isActive('/addproduct')} my-2`} onClick={() => navigate("/addproduct")}>Add Products</button>
                    <button className={` shadow-none  btn form-control ${isActive('/viewproduct')} my-2`} onClick={() => navigate("/viewproduct")}>View Products</button>
                    <button className={` shadow-none  btn form-control ${isActive('/viewuser')} my-2`} onClick={() => navigate("/viewuser")}>View Users</button>
                    <button className={` shadow-none  btn form-control ${isActive('/viewselling')} my-2`} onClick={() => navigate("/viewselling")}>View Selling</button>
                </div>
            </div>
        </>
    )
}

export default SideBar
