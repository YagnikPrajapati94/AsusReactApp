import React, { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Pages/UserPortal/LoginRegister/Login.jsx';
import Home from './views/Pages/UserPortal/Home/Home.jsx';
import Register from './views/Pages/UserPortal/LoginRegister/Register.jsx';
import DashBoard from './views/Pages/AdminPortal/Dasheboard/DashBoard.jsx';
import AdminLogin from './views/Pages/AdminPortal/AdminLogin/AdminLogin.jsx';
import About from './views/Pages/UserPortal/About/About.jsx';
import Store from './views/Pages/UserPortal/Store/Store.jsx';
import Contact from './views/Pages/UserPortal/Contact/Contact.jsx';
import AddProduct from './views/Pages/AdminPortal/Products/AddProduct.jsx';
import Laptop from './views/Pages/UserPortal/Laptop/Laptop.jsx';
import Cart from './views/Pages/UserPortal/Cart/Cart.jsx';
import Myorder from './views/Pages/UserPortal/Myorder/Myorder.jsx';
import ViewProducts from './views/Pages/AdminPortal/Products/ViewProducts.jsx';
import ViewSelling from './views/Pages/AdminPortal/Products/ViewSelling.jsx';
import ViewUser from './views/Pages/AdminPortal/Users/ViewUser.jsx';
import Forget from './views/Pages/UserPortal/LoginRegister/Forget.jsx';
import SendOtp from './views/Pages/UserPortal/LoginRegister/SendOtp.jsx';
import VerifyOtp from './views/Pages/UserPortal/LoginRegister/VerifyOtp.jsx';

function App() {
  useEffect(() => {
    // Prevent back and forward navigation
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);
  return (
    <>
      <Store>  {/* Wrap the app with the Store component */}
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/laptop' element={<Laptop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/forget' element={<Forget />} />
            <Route path='/sendotp' element={<SendOtp />} />
            <Route path='/verifyotp' element={<VerifyOtp />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Myorder />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/dash' element={<DashBoard />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/viewproduct' element={<ViewProducts />} />
            <Route path='/viewselling' element={<ViewSelling />} />
            <Route path='/viewuser' element={<ViewUser />} />
          </Routes>
        </Router>
      </Store>
      <Toaster />
    </>
  );
}

export default App;
