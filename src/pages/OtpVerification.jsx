import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectResetEmail, selectResetOtp, } from "@/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/signup-Frm-logo.png";
import otpImage from "../assets/otp-image.png";
import backgroundImage from "../assets/form-bg-image.jpg";

const OtpVerification = () => {
const navigate = useNavigate();
  // OTP State
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Timer State
  const [timer, setTimer] = useState(60);

  // Input References
  const inputRefs = useRef([]);

  // User Email
  const userEmail = useSelector(selectResetEmail);
  const savedOtp = useSelector(selectResetOtp);

  // Timer Logic
  useEffect(() => {

    if (timer <= 0) return;

    const interval = setInterval(() => {

      setTimer((prevTimer) => prevTimer - 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [timer]);

  // OTP Input Handler
  const handleChange = (value, index) => {

    // Only Numbers
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];

    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // Move Next Input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Backspace Handler
  const handleKeyDown = (event, index) => {

    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify Handler
  const handleVerifyOtp = () => {

  const finalOtp = otp.join("");

  if (finalOtp === savedOtp) {

    alert("OTP Verified Successfully!");

    navigate("/change-password");

  } else {

    alert("Invalid OTP");

  }
};

  // Timer Format
  const formatTime = (time) => {

    const minutes = String(
      Math.floor(time / 60)
    ).padStart(2, "0");

    const seconds = String(
      time % 60
    ).padStart(2, "0");

    return `${minutes}:${seconds}`;
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
        p-2
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

      <div
        className="
          h-[595px]
          w-[470px]
          mx-10
          bg-white
          rounded-[40px]
          shadow-2xl
          px-8
          py-10
        "
      >


        {/* Logo */}
        <div className="flex justify-center mb-2">

          <img
            src={logo}
            alt="Logo"
            className="w-64"
          />

        </div>

        {/* Heading */}
        <h1
          className="
            text-4xl
            font-bold
            text-center
            mb-3
          "
        >
          Verify OTP
        </h1>

        {/* Message */}
        <div className="text-center mb-3">

         <p className="text-gray-500 text-lg mb-2 font-bold">
  OTP Sent to
</p>

<p
  className="
    text-green-900
    font-semibold
    text-xl
  "
>
  {userEmail}
</p>

        </div>

        {/* OTP Image */}
        <div className="flex justify-center mb-4">

          <img
            src={otpImage}
            alt="OTP"
            className="w-[200px] h-[200px]"
          />

        </div>

        {/* OTP Boxes */}
        <div
          className="
            flex
            justify-center
            gap-3
            mb-3
            h-[50px]
          "
        >

          {otp.map((digit, index) => (

            <input
              key={`otp-${index}`}
              ref={(element) => (
                inputRefs.current[index] = element
              )}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(event) =>
                handleChange(
                  event.target.value,
                  index
                )
              }
              onKeyDown={(event) =>
                handleKeyDown(event, index)
              }
              className="
                w-12
                h-12
                border-2
                rounded-2xl
                text-center
                text-xl
                font-bold
                outline-none
                focus:border-green-800
              "
            />

          ))}

        </div>

        {/* Timer */}
        <div className="text-center mb-3">

          <span className="text-gray-500 text-[]">
            Don’t receive the OTP?
          </span>

          <span
            className="
              text-orange-400
              text-xl
              font-semibold
              ml-2
            "
          >
            {formatTime(timer)}
          </span>

        </div>

      

        <button
        onClick={handleVerifyOtp}
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
          Verify OTP
        </button>

      </div>

    </div>
  );
};

export default OtpVerification;