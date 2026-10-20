import React, { useState } from "react";

const ReportUserModal = ({ onClose }) => {
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [
    "Identity fraud",
    "Undesirable or harmful",
    "Publication of inappropriate contents",
    "Harassment or bullying",
    "Other",
  ];

  return (
    <>
      {/* ================= OVERLAY ================= */}

      <div className="fixed inset-0 bg-black/40 z-50" />

      {/* ================= MODAL ================= */}

      <div
  className="
    fixed
    top-0
    right-0
    h-screen
    w-[370px]
    bg-white
    z-[60]
    rounded-l-[18px]
    px-5
    py-7
    flex
    flex-col
  "
>

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between">

          <h2 className="text-[21px] font-semibold text-[#174A22]">
            Report the user
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="
              w-[25px]
              h-[25px]
              rounded-full
              bg-gray-500
              text-white
              flex
              items-center
              justify-center
              text-[18px]
            "
          >
            ×
          </button>

        </div>


        {/* ================= DESCRIPTION ================= */}

        <p className="mt-4 text-[12px] leading-[18px] text-gray-400">
          Please help us and select a reason to understand what
          is going on.
        </p>


        {/* ================= REASONS ================= */}

        <div className="mt-7 space-y-6">

          {reasons.map((reason) => (
            <label
              key={reason}
              className="
                w-full
                h-[48px]
                rounded-[10px]
                shadow-sm
                border
                border-gray-100
                flex
                items-center
                justify-between
                px-5
                cursor-pointer
              "
            >

              <span className="text-[12px] text-gray-900">
                {reason}
              </span>

              <input
  type="radio"
  name="reportReason"
  value={reason}
  checked={selectedReason === reason}
  onChange={(e) => setSelectedReason(e.target.value)}
  className="
    w-[19px]
    h-[19px]
    accent-[#174A22]
    cursor-pointer
  "
/>

            </label>
          ))}

        </div>


        {/* ================= SUBMIT BUTTON ================= */}

        <button
          type="button"
          disabled={!selectedReason}
          className="
  w-full
  h-[60px]
  mt-auto
  rounded-[12px]
  bg-[#174A22]
  text-white
  text-[14px]
  font-medium
  disabled:bg-[#9AAA9C]
  disabled:cursor-not-allowed
"
        >
          Submit
        </button>

      </div>
    </>
  );
};

export default ReportUserModal;