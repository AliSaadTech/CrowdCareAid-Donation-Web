import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  loginUser,
  selectIsLoading,
  selectIsSuccess,
  selectIsError,
  selectMessage,
  reset,
} from "@/features/auth/authSlice";

import { useEffect } from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/signup-Frm-logo.png";
import bgImage from '../assets/form-bg-image.jpg'


const Login = () => {

  const dispatch = useDispatch();
const navigate = useNavigate();

const isLoading = useSelector(selectIsLoading);
const isSuccess = useSelector(selectIsSuccess);
const isError = useSelector(selectIsError);
const message = useSelector(selectMessage);

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit Handler
 const handleSubmit = (event) => {
  event.preventDefault();

  dispatch(loginUser(formData));
};

useEffect(() => {
  if (isSuccess) {
    navigate("/home");
    dispatch(reset());
  }

  if (isError) {
    alert(message);
    dispatch(reset());
  }
}, [isSuccess, isError, message, navigate, dispatch]);

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
          Welcome Back
        </h1>

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

          {/* Password */}
          <div className="mb-4">

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
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

<p className="mb-4 text-end text-sm">

         

          <NavLink
            to="/Forgot-password"
            className="underline text-orange-500 font-medium  "
          >
           Forgot Password
          </NavLink>

        </p>


          {/* Signup Button */}
          <button
            type="submit"
            className="
              w-full
              h-12
              bg-green-900
              hover:bg-green-800
              text-white
              rounded-lg
              transition
              mb-6
            "
          >
           {isLoading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Divider */}
        <div className="relative mb-6">

          <hr />

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -top-3
              bg-white
              px-3
              text-gray-500
              text-sm
            "
          >
            OR
          </span>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-6">

          {/* Google */}
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
              h-12
              border
              rounded-full
              flex
              items-center
              justify-center
              hover:bg-gray-100
            "
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
              className="w-6 h-6"
            />

          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
              h-12
              border
              rounded-full
              flex
              items-center
              justify-center
              hover:bg-gray-100
            "
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6 h-6"
            />

          </a>

        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-600">

          Don't have account?{" "}

          <NavLink
            to="/signup"
            className="text-orange-500 font-medium"
          >
            Sign in
          </NavLink>

        </p>

      </div>

    </div>
  );
};

export default Login;