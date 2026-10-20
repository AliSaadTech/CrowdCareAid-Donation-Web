// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../assets/signup-Frm-logo.png";
// import bgImage from '../assets/form-bg-image.jpg'


// const Signup = () => {

//   // Form State
//   const [formData, setFormData] = useState({
//     firstName: "",
//     secondName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // Handle Input Change
//   const handleChange = (event) => {

//     const { name, value } = event.target;

//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Submit Handler
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(formData);
//     reset();
//   };

//   return (

//     <div
//       className="
//     min-h-screen
//     bg-cover
//     bg-center
//     flex
//     items-start
//     justify-start
//   "
//   style={{
//     backgroundImage: `url(${bgImage})`,
//   }}
//     >

//       <div
//         className="
//           w-full
//           max-w-md
//           bg-white
//           rounded-2xl
//           shadow-2xl
//           p-8
//           m-16
//         "
//       >

//         {/* Logo */}
//         <div className="flex justify-center mb-4">

//           <img
//             src={logo}
//             alt="Logo"
//             className="w-52"
//           />

//         </div>

//         {/* Heading */}
//         <h1
//           className="
//             text-4xl
//             font-bold
//             text-center
//             mb-8
//           "
//         >
//           Create your Account
//         </h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>

//           {/* First Name + Second Name */}
//           <div className="grid grid-cols-2 gap-4 mb-4">

//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="
//                 w-full
//                 h-12
//                 border
//                 rounded-lg
//                 px-4
//                 outline-none
//                 focus:ring-2
//                 focus:ring-green-700
//               "
//             />

//             <input
//               type="text"
//               name="secondName"
//               placeholder="Second Name"
//               value={formData.secondName}
//               onChange={handleChange}
//               className="
//                 w-full
//                 h-12
//                 border
//                 rounded-lg
//                 px-4
//                 outline-none
//                 focus:ring-2
//                 focus:ring-green-700
//               "
//             />

//           </div>

//           {/* Email */}
//           <div className="mb-4">

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="
//                 w-full
//                 h-12
//                 border
//                 rounded-lg
//                 px-4
//                 outline-none
//                 focus:ring-2
//                 focus:ring-green-700
//               "
//             />

//           </div>

//           {/* Password */}
//           <div className="mb-4">

//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="
//                 w-full
//                 h-12
//                 border
//                 rounded-lg
//                 px-4
//                 outline-none
//                 focus:ring-2
//                 focus:ring-green-700
//               "
//             />

//           </div>

//           {/* Confirm Password */}
//           <div className="mb-6">

//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="
//                 w-full
//                 h-12
//                 border
//                 rounded-lg
//                 px-4
//                 outline-none
//                 focus:ring-2
//                 focus:ring-green-700
//               "
//             />

//           </div>

//           {/* Signup Button */}
//           <button
//             type="submit"
//             className="
//               w-full
//               h-12
//               bg-green-900
//               hover:bg-green-800
//               text-white
//               rounded-lg
//               transition
//               mb-6
//             "
//           >
//             Signup
//           </button>

//         </form>

//         {/* Divider */}
//         <div className="relative mb-6">

//           <hr />

//           <span
//             className="
//               absolute
//               left-1/2
//               -translate-x-1/2
//               -top-3
//               bg-white
//               px-3
//               text-gray-500
//               text-sm
//             "
//           >
//             OR
//           </span>

//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-4 mb-6">

//           {/* Google */}
//           <a
//             href="https://google.com"
//             target="_blank"
//             rel="noreferrer"
//             className="
//               w-12
//               h-12
//               border
//               rounded-full
//               flex
//               items-center
//               justify-center
//               hover:bg-gray-100
//             "
//           >

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//               alt="Google"
//               className="w-6 h-6"
//             />

//           </a>

//           {/* Facebook */}
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noreferrer"
//             className="
//               w-12
//               h-12
//               border
//               rounded-full
//               flex
//               items-center
//               justify-center
//               hover:bg-gray-100
//             "
//           >

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
//               alt="Facebook"
//               className="w-6 h-6"
//             />

//           </a>

//         </div>

//         {/* Bottom Text */}
//         <p className="text-center text-sm text-gray-600">

//           Already have account?{" "}

//           <NavLink
//             to="/login"
//             className="text-orange-500 font-medium"
//           >
//             Login
//           </NavLink>

//         </p>

//       </div>

//     </div>
//   );
// };

// export default Signup;


import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, reset } from "../features/auth/authSlice";
import { 
  selectIsLoading, 
  selectIsError, 
  selectIsSuccess, 
  selectMessage 
} from "../features/auth/authSlice";
import logo from "../assets/signup-Frm-logo.png";
import bgImage from '../assets/form-bg-image.jpg'

const Signup = () => {
  // Navigation
  const navigate = useNavigate();
  
  // Redux - Individual selectors use kar rahe hain (warning fix)
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const isSuccess = useSelector(selectIsSuccess);
  const message = useSelector(selectMessage);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form state changes
  const { firstName, secondName, email, password, confirmPassword } = formData;

  // Handle success/error messages
  useEffect(() => {
    if (isError) {
      alert(message);
      dispatch(reset());
    }

    if (isSuccess) {
      // Check localStorage for stored user data
      const storedUser = localStorage.getItem('user');
      console.log('Registration successful! User data:', JSON.parse(storedUser));
      
      alert('Registration successful! Redirecting to login page...');
      
      // Login page par redirect karo
      setTimeout(() => {
        navigate('/login');
        dispatch(reset());
      }, 1000);
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

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

    // Basic validation
    if (!firstName || !secondName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    // Prepare user data
    const userData = {
      firstName,
      secondName,
      email,
      password,
    };

    console.log('Sending registration data:', userData);
    
    // Dispatch register action - yeh localStorage mein store karega
    dispatch(registerUser(userData));
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
          Create your Account
        </h1>

        {/* Error/Success Messages */}
        {message && (
          <div 
            className={`mb-4 p-3 rounded-lg text-center ${
              isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* First Name + Second Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
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

            <input
              type="text"
              name="secondName"
              placeholder="Second Name"
              value={secondName}
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

          {/* Email */}
          <div className="mb-4">

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
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
              value={password}
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

          {/* Confirm Password */}
          <div className="mb-6">

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
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

          {/* Signup Button */}
          <button
            type="submit"
            disabled={isLoading}
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
            {isLoading ? 'Creating Account...' : 'Signup'}
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

          Already have account?{" "}

          <NavLink
            to="/"
            className="text-orange-500 font-medium"
          >
            Login
          </NavLink>

        </p>

      </div>

    </div>
  );
};

export default Signup;