// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const Offcanvas = () => {
//   const navigate = useNavigate();
//   const [loginuser, setloginuser] = useState(null);
//   const location = useLocation(); // Get current location (path)
  
//   const fetchuser = () => {
//     const username = JSON.parse(localStorage.getItem('username')) || [];
//     username.map((user) => {
//       setloginuser(user);
//     });
//   };

//   const logout = () => {
//     localStorage.clear();
//     toast.success('Successfully Log-out');
//     setTimeout(() => {
//       navigate('/');
//     }, 1500);
//   };

//   useEffect(() => {
//     fetchuser();
//   }, []);

 
//   return (
//     <>
//       <div
//         className="offcanvas offcanvas-start"
//         data-bs-scroll="true"
//         data-bs-backdrop="false"
//         id="offcanvasScrolling"
//         aria-labelledby="offcanvasScrollingLabel"
//       >
//         <div className="offcanvas-header pt-4">
//           <img src="logo.svg" className="img-fluid" width="120px" alt="" />
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <ul className="navbar-nav ms-auto gap-2 ps-3 ">
//             <li className="nav-item">
//               <Link
//                 to="/home"
//                 className={`nav-link ${isActive('/home')}`}
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link `} to="/laptop">
//                 Laptop
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${isActive('/about')}`} to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${isActive('/contact')}`} to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item position-relative">
//               <a
//                 href="#"
//                 className="nav-link"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 MyAccount
//               </a>
//               <ul className="dropdown-menu position-absolute">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Username : {loginuser}
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     My Order
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Saved Product
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     onClick={() => logout()}
//                     className="dropdown-item text-danger"
//                     href="#"
//                   >
//                     Logout
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 <i className="fa-solid fa-bag-shopping fs-5"></i>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Offcanvas;
