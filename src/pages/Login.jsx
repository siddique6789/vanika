import React, { useState, useRef } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // custom context (we'll define this if not done)

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaRef = useRef(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!phone.match(/^\+91\d{10}$/)) {
      alert("Please enter a valid 10-digit Indian phone number with +91");
      return;
    }

    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,  
          "recaptcha-container",
          {
            size: "invisible",
              callback: () => {
                console.log("reCAPTCHA solved");
            },
          },
        );
        }
        
      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent!");
    } catch (err) {
      console.error("OTP Error", err);
      alert("Failed to send OTP.");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const res = await confirmationResult.confirm(otp);
      const userData = {
        uid: res.user.uid,
        phone: res.user.phoneNumber,
      };
      setUser(userData); // store in context
      alert("Logged in successfully!");
      navigate("/checkout"); // or "/"
    } catch (err) {
      console.error("OTP verification failed", err);
      alert("Invalid OTP");
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Login with Phone</h2>

      {/* Phone input */}
      <input
        type="tel"
        className="form-control mb-3"
        placeholder="+91XXXXXXXXXX"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="btn btn-success w-100 mb-3" onClick={handleSendOTP}>
        Send OTP
      </button>

      {/* OTP input */}
      {confirmationResult && (
        <>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn btn-primary w-100" onClick={handleVerifyOTP}>
            Verify & Login
          </button>
        </>
      )}

      {/* ReCAPTCHA element */}
      <div id="recaptcha-container" ref={recaptchaRef}></div>
    </div>
  );
};

export default Login;
