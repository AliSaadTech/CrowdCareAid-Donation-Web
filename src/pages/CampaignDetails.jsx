import React, { useState } from "react";
import campaignDetailImage from "../assets/Rectangle 1475.png";
import ReportUserModal from "../components/ReportUserModal";

const CampaignDetails = () => {
    const [showReportModal, setShowReportModal] = useState(false);
    return (
        <div className="w-full flex justify-center">

            <div className="w-full max-w-[770px]">

                {/* HERO IMAGE */}
               <div className="relative w-full h-[330px] rounded-[10px] overflow-hidden">

  <img
    src={campaignDetailImage}
    alt="Campaign"
    className="w-full h-full object-cover"
  />

  {/* Report Button */}

  <button
    type="button"
    onClick={() => setShowReportModal(true)}
    className="
      absolute
      top-4
      right-4
      w-[30px]
      h-[30px]
      rounded-[7px]
      bg-black/40
      flex
      items-center
      justify-center
      text-white
      hover:bg-black/60
      transition
    "
  >
    ⚠
  </button>

</div>

                {/* CAMPAIGN CONTENT */}
                <div className="mt-5">

                    <h1 className="text-[16px] font-semibold text-gray-900">
                        Donate for flood victim
                    </h1>

                    <p className="mt-2 text-[10px] leading-[15px] text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>

                </div>

         {/* ================= FUNDRAISING INFO ================= */}

<div className="mt-7">

  {/* Total Fundraise + Target Amount */}

  <div className="flex justify-between items-start">

    {/* Total Fundraise */}

    <div>
      <p className="text-[11px] text-gray-400">
        Total Fundraise
      </p>

      <p className="mt-2 text-[16px] font-semibold text-gray-900">
        $ 750
      </p>
    </div>


    {/* Target Amount */}

    <div className="text-right">
      <p className="text-[11px] text-gray-400">
        Target Amount
      </p>

      <p className="mt-2 text-[16px] font-semibold text-gray-900">
        $ 1500
      </p>
    </div>

  </div>


  {/* ================= PROGRESS BAR ================= */}

  <div className="mt-7">

    <div className="flex justify-end mb-1">
      <span className="text-[9px] text-gray-900">
        %50
      </span>
    </div>

    <div className="w-full h-[3px] bg-gray-400 rounded-full">

      <div
        className="h-full bg-[#174A22] rounded-full"
        style={{ width: "50%" }}
      />

    </div>

  </div>


  {/* ================= LOCATION + DURATION ================= */}

  <div className="flex justify-between mt-5">

    {/* LOCATION */}

    <div>
      <p className="text-[11px] text-gray-400">
        Sri Lanka
      </p>

      <p className="mt-2 text-[16px] font-semibold text-gray-900">
        Gampaha
      </p>
    </div>


    {/* DURATION */}

    <div className="text-right">

      <p className="text-[11px] text-gray-400">
        Duration Date
      </p>

      <p className="mt-2 text-[16px] font-semibold text-gray-900">
        20-07-24&nbsp;&nbsp;25-07-24
      </p>

    </div>

  </div>

</div>

{/* ================= DONOR LIST ================= */}

<div className="mt-6">

  <h2 className="text-[15px] font-semibold text-gray-900">
    Doner List
  </h2>


  {/* ================= DONOR 1 ================= */}

  <div className="mt-5">

    {/* Donor Info */}

    <div className="flex items-center gap-3">

      <img
        src="/src/assets/person-2.png"
        alt="Wade Warren"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />

      <div>
        <p className="text-[10px] font-medium text-gray-900">
          Wade Warren
        </p>

        <p className="text-[9px] text-gray-400 mt-1">
          Wadewarren@gmail.com
        </p>
      </div>

    </div>


    {/* Donation Date */}

    <div className="flex justify-between mt-4">

      <p className="text-[9px] text-gray-400">
        Donation Date
      </p>

      <p className="text-[9px] text-gray-700">
        15-11-2024
      </p>

    </div>


    {/* Donation Amount */}

    <div className="flex justify-between mt-3">

      <p className="text-[9px] text-gray-400">
        Donation Amount
      </p>

      <p className="text-[9px] text-gray-700">
        $ 250
      </p>

    </div>


    {/* Separator */}

    <div className="w-full border-b border-gray-200 mt-4" />

  </div>


  {/* ================= DONOR 2 ================= */}

  <div className="mt-4">

    {/* Donor Info */}

    <div className="flex items-center gap-3">

      <img
        src="/src/assets/person-1.png"
        alt="Jane Cooper"
        className="w-[30px] h-[30px] rounded-full object-cover"
      />

      <div>
        <p className="text-[10px] font-medium text-gray-900">
          Jane Cooper
        </p>

        <p className="text-[9px] text-gray-400 mt-1">
          janecooper@gmail.com
        </p>
      </div>

    </div>


    {/* Donation Date */}

    <div className="flex justify-between mt-4">

      <p className="text-[9px] text-gray-400">
        Donation Date
      </p>

      <p className="text-[9px] text-gray-700">
        20-11-2024
      </p>

    </div>


    {/* Donation Amount */}

    <div className="flex justify-between mt-3">

      <p className="text-[9px] text-gray-400">
        Donation Amount
      </p>

      <p className="text-[9px] text-gray-700">
        $ 255
      </p>

    </div>


    {/* Separator */}

    <div className="w-full border-b border-gray-200 mt-4" />

  </div>

</div>

{/* ================= ACTION BUTTONS ================= */}

<div className="flex gap-7 mt-6 pb-5">

  {/* BACK BUTTON */}

  <button
    type="button"
    className="
      flex-1
      h-[39px]
      rounded-[9px]
      border
      border-[#1B4D25]
      bg-white
      text-[12px]
      font-medium
      text-[#1B4D25]
      hover:bg-gray-50
      transition
    "
  >
    Back
  </button>


  {/* DONATE BUTTON */}

  <button
    type="button"
    className="
      flex-1
      h-[39px]
      rounded-[9px]
      bg-[#174A22]
      text-[12px]
      font-medium
      text-white
      hover:bg-[#123b1b]
      transition
    "
  >
    Donate
  </button>

</div>

            </div>
            {showReportModal && (
  <ReportUserModal
    onClose={() => setShowReportModal(false)}
  />
)}

        </div>
    );
};

export default CampaignDetails;