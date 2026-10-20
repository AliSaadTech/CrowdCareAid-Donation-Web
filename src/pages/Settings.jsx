import React, { useState, useRef } from "react";
import { Pencil } from "lucide-react";
import profileImage from "../assets/profile-image.png";

const Settings = () => {
   const [isEditing, setIsEditing] = useState(false);
   const firstNameRef = useRef(null);
   const [firstName, setFirstName] = useState("Jane");
const [lastName, setLastName] = useState("Jane");
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[770px]">

        {/* ================= PROFILE HEADER ================= */}
        <div className="flex items-center justify-between">

          {/* Profile Info */}
          <div className="flex items-center gap-5">

            {/* Profile Image */}
            <div className="w-[86px] h-[86px] rounded-full overflow-hidden bg-gray-200">
             <img
  src={profileImage}
  alt="Jane Cooper"
  className="w-full h-full object-cover"
/>
            </div>

            {/* Name & Email */}
            <div>
              <h1 className="text-[20px] font-semibold text-[#174A22]">
                Jane Cooper
              </h1>

              <p className="mt-1 text-[13px] text-gray-500">
                janecooper@gmail.com
              </p>

              <p className="mt-2 text-[13px] text-gray-500">
                New York
              </p>
            </div>
          </div>

          {/* Edit Button */}
<button
  type="button"
  onClick={() => {
    setIsEditing(true);

    setTimeout(() => {
      firstNameRef.current?.focus();
    }, 0);
  }}
  className="w-[94px] h-[40px] rounded-[8px] bg-[#F1F5F7] flex items-center justify-center gap-3 text-[12px] text-gray-700"
>
  <span>Edit</span>
  <Pencil size={17} strokeWidth={1.8} />
</button>
        </div>
   {/* ================= PROFILE FIELDS ================= */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-5 font-[Poppins]">

  {/* First Name */}
  <div>
  <label className="block text-[13px] font-normal text-[#111111] mb-2">
    First Name
  </label>

  {isEditing ? (
    <input
  ref={firstNameRef}
  type="text"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] px-4 outline-none text-[13px] text-[#111111]"
/>
  ) : (
    <div className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] flex items-center px-4">
      <span className="text-[11px] font-normal text-[#111111]">
  {firstName}
</span>
    </div>
  )}
</div>

  {/* Last Name */}
 <div>
  <label className="block text-[13px] font-normal text-[#111111] mb-2">
    Last Name
  </label>

  {isEditing ? (
    <input
  type="text"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] px-4 outline-none text-[13px] text-[#111111]"
/>
  ) : (
    <div className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] flex items-center px-4">
      <span className="text-[13px] font-normal text-[#111111]">
       {lastName}
      </span>
    </div>
  )}
</div>

  {/* Date of Birth */}
 <div>
  <label className="block text-[13px] font-normal text-[#111111] mb-2">
    Date of Birth
  </label>

  {isEditing ? (
    <input
      type="text"
      defaultValue="17-06-1996"
      className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] px-4 outline-none text-[13px] text-[#111111]"
    />
  ) : (
    <div className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] flex items-center px-4">
      <span className="text-[13px] font-normal text-[#111111]">
        17-06-1996
      </span>
    </div>
  )}
</div>

  {/* Phone */}
  <div>
  <label className="block text-[13px] font-normal text-[#111111] mb-2">
    Phone
  </label>

  {isEditing ? (
    <input
      type="text"
      defaultValue="(406) 555-0120"
      className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] px-4 outline-nonetext-[13px] text-[#111111]"
    />
  ) : (
    <div className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] flex items-center px-4">
      <span className="text-[13px] font-normal text-[#111111]">
        (406) 555-0120
      </span>
    </div>
  )}
</div>

</div>
{/* ================= ABOUT ME ================= */}
<div className="mt-5">
  <label className="block text-[13px] font-normal text-[#111111] mb-2">
    About Me
  </label>

  {isEditing ? (
  <textarea
    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    className="w-full min-h-[74px] rounded-[8px] bg-[#F0F4F7] px-4 py-4 outline-none resize-none text-[13px] leading-[17px] text-[#111111]"
  />
) : (
  <div className="w-full min-h-[74px] rounded-[8px] bg-[#F0F4F7] px-4 py-4">
    <p className="text-[13px] leading-[17px] font-normal text-[#111111]">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.
    </p>
  </div>
)}
</div>
{/* ================= LOCATION & GENDER ================= */}
<div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-9">

  {/* Location */}
  <div>
    <label className="block text-[13px] font-normal text-[#111111] mb-2">
      Location
    </label>

    {isEditing ? (
  <input
    type="text"
    defaultValue="New York"
    className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] px-4 outline-none text-[13px] text-[#111111]"
  />
) : (
  <div className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] flex items-center px-4">
    <span className="text-[13px] font-normal text-[#111111]">
      New York
    </span>
  </div>
)}
  </div>

  {/* Gender */}
  <div>
    <label className="block text-[13px] font-normal text-[#111111] mb-2">
      Gender
    </label>

    {isEditing ? (
  <input
    type="text"
    defaultValue="Male"
    className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] px-4 outline-none text-[13px] text-[#111111]"
  />
) : (
  <div className="w-full h-[44px] rounded-[8px] bg-[#F0F4F7] flex items-center px-4">
    <span className="text-[13px] font-normal text-[#111111]">
      Male
    </span>
  </div>
)}
  </div>

</div>
{/* ================= CONTRIBUTION ================= */}
<div className="mt-5">
  <h2 className="text-[18px] font-semibold text-[#174A22]">
    Contribution
  </h2>

  {/* Contribution Cards */}
  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 rounded-[8px] overflow-hidden bg-[#F58220]">

    {/* Campaigns */}
    <div className="h-[150px] flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-white/70">
      <p className="text-[18px] font-medium text-white">
        3
      </p>
      <p className="mt-3 text-[16px] font-medium text-white">
        Campaigns
      </p>
    </div>

    {/* Donation */}
    <div className="h-[150px] flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-white/70">
      <p className="text-[18px] font-medium text-white">
        $ 5,000
      </p>
      <p className="mt-3 text-[16px] font-medium text-white">
        Donation
      </p>
    </div>

    {/* Generate */}
    <div className="h-[150px] flex flex-col items-center justify-center">
      <p className="text-[18px] font-medium text-white">
        $ 5,000
      </p>
      <p className="mt-3 text-[16px] font-medium text-white">
        Generate
      </p>
    </div>

  </div>
</div>
<div className="mt-8 flex gap-10">
  <button
    type="button"
    className="w-1/2 h-[56px] rounded-[10px] border border-[#174A22] text-[#174A22] text-[15px] font-medium"
  >
    Back
  </button>

  <button
    type="button"
    onClick={() => setIsEditing(false)}
    className="w-1/2 h-[56px] rounded-[10px] bg-[#174A22] text-white text-[15px] font-medium"
  >
    Save Changes
  </button>
</div>

      </div>
    </div>
  );
};

export default Settings;