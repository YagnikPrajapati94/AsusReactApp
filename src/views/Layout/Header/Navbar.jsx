import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate()
    const [loginuser, setloginuser] = useState(null)
    const [cart, setcart] = useState([])
    const [cartcount, setcartcount] = useState(0)

    const fetchuser = () => {
        const username = JSON.parse(localStorage.getItem("username")) || []
        username.map((user) => {
            setloginuser(user)
        })
    }

    const logout = () => {
        localStorage.clear();
        toast.success('Successfully Log-out')
        setTimeout(() => {
            navigate("/")
        }, 1500);
    }

    const isActive = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const fectchCart = async () => {
        try {
            const cartapi = await axios.get("http://localhost:3000/cart")
            setcart(cartapi.data)
        } catch (error) {
            console.log(error);
        }
    }

    // The count function is called to count how many items are in the cart for the logged-in user
    const count = () => {
        if (loginuser) {
            let count = 0
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].username == loginuser) {
                    count++
                }
            }
            setcartcount(count)  // Set the cart count after the loop finishes
        }
    }

    useEffect(() => {
        fetchuser()
        fectchCart()
    }, [])  // The initial fetch when the component is mounted

    // Recalculate the cart count when cart or loginuser changes
    useEffect(() => {
        if (loginuser && cart.length > 0) {
            count()  // Count products after both cart and loginuser are fetched
        }
    }, [cart, loginuser])  // Dependency array includes both `cart` and `loginuser`

    return (
        <>
            <header>
                <div className="container-fluid bg-white">
                    <div className="container py-2 p-0">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <img src="https://dlcdnimgs.asus.com/images/logo/logo-001.svg" className="img-fluid" width={"120px"} alt="" />
                                </a>
                                <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto gap-3">
                                        <li className="nav-item">
                                            <Link to={`/home`} className={`nav-link ${isActive('/home')}`} aria-current="page">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/laptop"} className={`nav-link ${isActive('/laptop')}`} >Laptop</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/about"} className={`nav-link ${isActive('/about')}`} >About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/contact"} className={`nav-link ${isActive('/contact')}`} >Contact</Link>
                                        </li>
                                        <li className="nav-item position-relative">
                                            <a href='#' className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">MyAccount</a>
                                            <ul className="dropdown-menu position-absolute">
                                                <li><a className="dropdown-item" href="#">Username : {loginuser}</a></li>
                                                <li><Link to={"/order"} className="dropdown-item" href="#">My Order</Link></li>
                                                {/* <li><a className="dropdown-item" href="#">Saved Product</a></li> */}
                                                <li><a onClick={() => logout()} className="dropdown-item text-danger" href="#">Logout</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                           <Link to={"/cart"}>
                                               <IconButton aria-label="cart">
                                                   <StyledBadge badgeContent={cartcount} color="secondary">
                                                       <ShoppingCartIcon />
                                                   </StyledBadge>
                                               </IconButton>
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
