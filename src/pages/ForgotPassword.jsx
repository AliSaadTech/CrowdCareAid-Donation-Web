import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setResetEmail,  setResetOtp, } from "@/features/auth/authSlice";
import logo from "../assets/signup-Frm-logo.png";
import bgImage from '../assets/form-bg-image.jpg'

const ForgotPassword = () => {

  const dispatch = useDispatch();
const navigate = useNavigate();
  // Form State
  const [formData, setFormData] = useState({
    email: "", 
  });

  // Handle Input Change
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  // Get all registered users
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Find user by email
  const user = users.find(
    (item) => item.email === formData.email
  );

  // Email not found
  if (!user) {
    alert("Email not found!");
    return;
  }

  // Save email in Redux
  dispatch(setResetEmail(formData.email));

  // Generate Random 4 Digit OTP
const otp = Math.floor(1000 + Math.random() * 9000).toString();

// Save OTP in Redux
dispatch(setResetOtp(otp));

// Check OTP in Console (Testing)
console.log("Generated OTP:", otp);

  // Go to OTP page
  navigate("/verify-otp");

};

  return (

    <div
      className="
    min-h-screen
    bg-cover
    bg-center
    flex
    items-start
    justify-start
  "
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
    >

      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-2xl
          shadow-2xl
          p-8
          m-16
        "
      >

        {/* Logo */}
        <div className="flex justify-center mb-4">

          <img
            src={logo}
            alt="Logo"
            className="w-52"
          />

        </div>

        {/* Heading */}
        <h1
          className="
            text-4xl
            font-bold
            text-center
            mb-8
          "
        >
          Reset Password
        </h1>
        <p  className="
    text-[#858585]
    font-normal
    text-[18px]
    leading-[100%]
    tracking-[-0.28px]
    text-center
    font-[Poppins]
    mb-4
  ">
            Please enter your Email address that you used to register with us.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>      

          {/* Email */}
          <div className="mb-4">

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                h-12
                border
                rounded-lg
                px-4
                outline-none
                focus:ring-2
                focus:ring-green-700
              "
            />

          </div>

         

          
          <button
            type="submit"
             className="
    bg-[#EA7E24]
    hover:bg-[#d96f1a]
    text-white
    px-6
    py-2
    rounded-lg
    transition
    duration-300
    w-full
  "
          >
           Send Email
          </button>

        </form>


     
      </div>

    </div>
  );
};

export default ForgotPassword;