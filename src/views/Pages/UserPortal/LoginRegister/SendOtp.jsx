import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const SendOtp = () => {
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch all registered users from your database
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3000/user');
      setUsers(res.data); // Store all users in the `users` state
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component is mounted
  }, []);

  const sendOtp = () => {
    // Check if the entered email is empty
    if (!email) {
      toast.error('Please enter your email.');
      return;
    }

    // Check if the users data is loaded
    if (users.length === 0) {
      toast.error('User list is not loaded yet. Try again shortly.');
      return;
    }

    // Find the matched user with the entered email
    const matchedUser = users.find((user) => user.email === email);

    // If no match found, display an error message
    if (!matchedUser) {
      toast.error('Email not registered. OTP not sent.');
      return;
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Save OTP and email in localStorage for later verification
    localStorage.setItem('otp', otp);
    localStorage.setItem('resetEmail', matchedUser.email);

    // Prepare the template parameters (email and OTP)
    const templateParams = {
      user_email: matchedUser.email, // Ensure that the OTP goes to the registered email
      otp: otp,
    };

    // Use EmailJS to send OTP
    emailjs
      .send('service_nzah1np', 'template_28n18gk', templateParams, '9bICd62C75KlHzIr9')
      .then(() => {
        toast.success('OTP sent to your registered email!');
        navigate('/verifyotp'); // Navigate to the OTP verification page
      })
      .catch(() => {
        toast.error('Failed to send OTP. Please try again.');
      });
  };

  return (
    <>
      <div className="container-fluid px-0 min-vh-100 d-flex flex-column justify-content-start">
        {/* Header */}
        <div className="bg-white mb-4 px-3 py-3">
          <img src="logo.svg" alt="logo" />
          <Link to={'/admin'} className="float-end">
            Admin
          </Link>
        </div>

        {/* OTP Form */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-3 text-center">Forgot Password</h4>
                  <p className="text-secondary small text-center mb-4">
                    Enter your registered email to receive OTP
                  </p>

                  <div className="mb-3">
                    <label className="form-label">Email address</label>

                    {/* Email preview */}
                    {email && (
                      <div className="mb-2">
                        <small className="text-muted">
                          📧 OTP will be sent to: <strong>{email}</strong>
                        </small>
                      </div>
                    )}

                    <input
                      type="email"
                      className="form-control shadow-none"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-primary w-100 mt-2 shadow-none"
                    onClick={sendOtp}
                  >
                    Send OTP
                  </button>

                  <p className="mt-3 text-center small">
                    Remember your password? <Link to="/">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOtp;
