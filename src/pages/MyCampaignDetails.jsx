import React from "react";
import campaignDetailImage from "../assets/Rectangle 1475.png";
import { useNavigate } from "react-router-dom";
const MyCampaignDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[770px]">

        {/* Campaign Image */}
        <div className="w-full h-[330px] rounded-[10px] overflow-hidden">
          <img
            src={campaignDetailImage}
            alt="Campaign"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Campaign Title */}
        <div className="mt-5">
          <h1 className="text-[16px] font-semibold text-gray-900">
            Donate for flood victim
          </h1>

          {/* Description */}
          <p className="mt-2 text-[10px] leading-[15px] text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* ================= FUNDRAISING INFO ================= */}
<div className="mt-6">
  {/* Total Fundraise & Target Amount */}
  <div className="flex justify-between items-start">
    <div>
      <p className="text-[9px] text-gray-400">Total Fundraise</p>
      <p className="mt-1 text-[13px] font-semibold text-gray-900">
        $ 750
      </p>
    </div>

    <div className="text-right">
      <p className="text-[9px] text-gray-400">Target Amount</p>
      <p className="mt-1 text-[13px] font-semibold text-gray-900">
        $ 1500
      </p>
    </div>
  </div>

  {/* Progress */}
  <div className="mt-5">
    <div className="flex justify-end mb-1">
      <span className="text-[8px] text-gray-900">%50</span>
    </div>

    <div className="w-full h-[2px] bg-gray-400 rounded-full">
      <div
        className="h-full bg-[#174A22] rounded-full"
        style={{ width: "50%" }}
      />
    </div>
  </div>

  {/* Location & Duration */}
  <div className="flex justify-between mt-4">
    <div>
      <p className="text-[9px] text-gray-400">Sri Lanka</p>
      <p className="mt-1 text-[13px] font-semibold text-gray-900">
        Gampaha
      </p>
    </div>

    <div className="text-right">
      <p className="text-[9px] text-gray-400">Duration Date</p>
      <p className="mt-1 text-[13px] font-semibold text-gray-900">
        20-07-24&nbsp;&nbsp;25-07-24
      </p>
    </div>
  </div>
</div>
{/* ================= ACTION BUTTONS ================= */}
<div className="flex gap-4 mt-8">
  <button
    type="button"
    className="w-1/2 h-[40px] rounded-[8px] border border-[#174A22] text-[#174A22] text-[12px] font-medium"
  >
    Edit
  </button>

  <button
  type="button"
  onClick={() => navigate("/receipt")}
  className="w-1/2 h-[40px] rounded-[8px] bg-[#174A22] text-white text-[12px] font-medium"
>
  Donate
</button>
</div>

      </div>
    </div>
  );
};

export default MyCampaignDetails;