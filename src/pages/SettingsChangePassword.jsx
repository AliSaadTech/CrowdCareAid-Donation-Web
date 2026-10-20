import React, { useState } from "react";

const SettingsChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const [successMessage, setSuccessMessage] = useState("");
const handleSubmit = () => {
  setErrors({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  setSuccessMessage("");

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Find logged-in user
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  if (!loggedInUser) {
    setErrors((prev) => ({
      ...prev,
      oldPassword: "User not found. Please login again.",
    }));
    return;
  }

  const currentUser = users.find(
    (user) => user.email === loggedInUser.email
  );

  if (!currentUser) {
    setErrors((prev) => ({
      ...prev,
      oldPassword: "User account not found.",
    }));
    return;
  }

  // Old password
  if (!oldPassword.trim()) {
    setErrors((prev) => ({
      ...prev,
      oldPassword: "Old password is required",
    }));
    return;
  }

  if (oldPassword !== currentUser.password) {
    setErrors((prev) => ({
      ...prev,
      oldPassword: "Old password is incorrect",
    }));
    return;
  }
  {errors.oldPassword && (
  <p className="mt-2 text-[12px] text-red-500">
    {errors.oldPassword}
  </p>
)}

  // New password
  if (!newPassword.trim()) {
    setErrors((prev) => ({
      ...prev,
      newPassword: "New password is required",
    }));
    return;
  }
  {errors.newPassword && (
  <p className="mt-2 text-[12px] text-red-500">
    {errors.newPassword}
  </p>
)}

  if (newPassword.length < 8) {
    setErrors((prev) => ({
      ...prev,
      newPassword: "Password must be at least 8 characters",
    }));
    return;
  }
  {errors.confirmPassword && (
  <p className="mt-2 text-[12px] text-red-500">
    {errors.confirmPassword}
  </p>
)}

  // Confirm password
  if (!confirmPassword.trim()) {
    setErrors((prev) => ({
      ...prev,
      confirmPassword: "Confirm password is required",
    }));
    return;
  }

  if (newPassword !== confirmPassword) {
    setErrors((prev) => ({
      ...prev,
      confirmPassword: "Passwords do not match",
    }));
    return;
  }

  // Update password
  const updatedUsers = users.map((user) =>
    user.email === loggedInUser.email
      ? {
          ...user,
          password: newPassword,
        }
      : user
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  setSuccessMessage("Password changed successfully");

  setOldPassword("");
  setNewPassword("");
  setConfirmPassword("");
};

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[594px]">

        {/* Heading */}
        <h1 className="text-[24px] md:text-[25px] font-semibold text-[#174A22]">
          Change Password
        </h1>

        {/* Form */}
        <div className="mt-7 space-y-5">

          {/* Old Password */}
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
            className="w-full h-[45px] rounded-[8px] bg-white shadow-md px-7 outline-none text-[13px] text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#174A22]"
          />

          {/* New Password */}
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="w-full h-[45px] rounded-[8px] bg-white shadow-md px-7 outline-none text-[13px] text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#174A22]"
          />

          {/* Confirm Password */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full h-[45px] rounded-[8px] bg-white shadow-md px-7 outline-none text-[13px] text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#174A22]"
          />

        </div>

        {/* Continue */}
        <button
  type="button"
  onClick={handleSubmit}
  className="w-full h-[62px] mt-10 rounded-[10px] bg-[#174A22] text-white text-[15px] font-medium hover:bg-[#123d1c] transition-colors"
>
  Continue
</button>
{successMessage && (
  <p className="mt-4 text-center text-[13px] text-[#174A22]">
    {successMessage}
  </p>
)}

      </div>
    </div>
  );
};

export default SettingsChangePassword;