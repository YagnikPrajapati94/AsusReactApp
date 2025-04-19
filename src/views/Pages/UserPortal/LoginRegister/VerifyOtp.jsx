import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {
  const [otpInput, setOtpInput] = useState("")
  const navigate = useNavigate()

  const verify = (e) => {
    e.preventDefault()
    const originalOtp = localStorage.getItem("otp")

    if (otpInput === originalOtp) {
      alert("✅ OTP Verified Successfully!")
      navigate("/forget")
    } else {
      alert("❌ Incorrect OTP, please try again.")
    }
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow p-4">
          <div className="card-body">
            <h4 className="text-center mb-3">OTP Verification</h4>
            <p className="text-secondary text-center mb-4">Enter the OTP sent to your registered email.</p>

            <form onSubmit={verify}>
              <div className="mb-3">
                <label className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control shadow-none text-center"
                  placeholder="6-digit OTP"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  required
                  maxLength={6}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 shadow-none">
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyOtp
