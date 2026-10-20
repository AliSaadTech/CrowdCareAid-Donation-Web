import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectResetEmail } from "@/features/auth/authSlice";

import logo from "../assets/signup-Frm-logo.png";
import backgroundImage from "../assets/form-bg-image.jpg";

const ChangePassword = () => {

  const userEmail = useSelector(selectResetEmail);
  // Form State
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  // Error State
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  
  
  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  
  
  const [showModal, setShowModal] = useState(false);
  
 
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Remove Error While Typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validation Function
  const validateForm = () => {

    const newErrors = {
      password: "",
      confirmPassword: "",
    };

    let isValid = true;

    // Password Validation
    if (!formData.password.trim()) {

      newErrors.password = "Password is required";

      isValid = false;
    }

    else if (formData.password.length < 8) {

      newErrors.password =
        "Password must be at least 8 characters";

      isValid = false;
    }

    // Confirm Password Validation
    if (!formData.confirmPassword.trim()) {

      newErrors.confirmPassword =
        "Confirm password is required";

      isValid = false;
    }

    else if (
      formData.password !==
      formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        "Passwords do not match";

      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  // Submit Handler
  const handleSubmit = async (event) => {

    event.preventDefault();
    setSuccessMessage("");
    
    // Validate Form
    const isFormValid = validateForm();
    
    if (!isFormValid) return;
    
    try {
      
      setIsLoading(true);
      
      // Fake API Delay
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
    );
    
    console.log("User Email:", userEmail);
      console.log("New Password:", formData.password);


      // Get all users
const users = JSON.parse(localStorage.getItem("users") || "[]");
console.log("All Users:", users);

// Find current user
const updatedUsers = users.map((user) => {

  if (user.email === userEmail) {

    return {
      ...user,
      password: formData.password,
    };

  }

  return user;

});

// Save updated users
localStorage.setItem(
  "users",
  JSON.stringify(updatedUsers)
);
console.log("Updated Users:", updatedUsers);
console.log(
  "LocalStorage Users:",
  JSON.parse(localStorage.getItem("users"))
);

     
      setShowModal(true);  

      // Reset Form
      setFormData({
        password: "",
        confirmPassword: "",
      });

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setIsLoading(false);

    }
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
        p-4
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

      <div
        className="
          h-[585px]
          w-[470px]
          
          max-w-lg
          bg-white
          rounded-[40px]
          shadow-2xl
          px-8
          py-10
        "
      >

        {/* Logo */}
        <div className="flex justify-center mb-6">

          <img
            src={logo}
            alt="Logo"
            className="w-64"
          />

        </div>

        {/* Heading */}
        <h1
          className="
            text-5xl
            font-bold
            text-center
            mb-4
          "
        >
          Reset Password
        </h1>

        {/* Description */}
        <p
          className="
            text-center
            text-gray-500
            text-lg
            mb-10
          "
        >
          Create your new password and confirm it
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* New Password */}
          <div className="mb-6">

            <input
              type="password"
              name="password"
              placeholder="Enter New Password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                h-14
                border-2
                rounded-xl
                px-5
                outline-none
                text-lg
                focus:border-green-800
              "
            />

            {/* Error */}
            {errors.password && (

              <p
                className="
                  text-red-500
                  text-sm
                  mt-2
                "
              >
                {errors.password}
              </p>

            )}

          </div>

          {/* Confirm Password */}
          <div className="mb-8">

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="
                w-full
                h-14
                border-2
                rounded-xl
                px-5
                outline-none
                text-lg
                focus:border-green-800
              "
            />

            {/* Error */}
            {errors.confirmPassword && (

              <p
                className="
                  text-red-500
                  text-sm
                  mt-2
                "
              >
                {errors.confirmPassword}
              </p>

            )}

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full
              h-14
              bg-[#EA7E24]
              hover:bg-orange-800
              text-white
              rounded-xl
              text-xl
              font-medium
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >

            {isLoading
              ? "Changing Password..."
              : "Change Password"}

          </button>

        </form>

      </div>


      {/* ✅ Modal - Fixed and improved */}
      {showModal && (

        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-50
            px-4
          "
        >

          <div
            className="
              bg-white
              w-full
              max-w-md
              rounded-3xl
              overflow-hidden
              shadow-2xl
            "
          >

            {/* Logo Section */}
            <div className="pt-8 pb-4 flex justify-center">

              <img
                src={logo}
                alt="Logo"
                className="w-60"
              />

            </div>

            {/* Header - Green Bar */}
            <div
              className="
                bg-green-900
                text-white
                text-center
                py-4
                text-2xl
                font-medium
              "
            >
              Password Change
            </div>

            {/* Body */}
            <div
              className="
                px-8
                py-10
                text-center
              "
            >

              <p
                className="
                  text-xl
                  text-gray-700
                  mb-10
                "
              >
                Password Changed Successfully
              </p>

              <button
                onClick={() => {
                  setShowModal(false);
                  navigate("/");
                }}
                className="
                  bg-green-900
                  hover:bg-green-800
                  text-white
                  px-20
                  py-4
                  rounded-xl
                  text-xl
                  transition
                "
              >
                Okay
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ChangePassword;