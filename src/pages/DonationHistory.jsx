import { useState } from "react";
import { HiSearch, HiFilter } from "react-icons/hi";
import DonationCard from "@/components/donation/DonationCard";

const DonationHistory = () => {
  const [activeTab, setActiveTab] = useState("fundraiser");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full">
      <div className="w-full max-w-[720px] mx-auto py-8">

        {/* ========================= */}
        {/* PAGE HEADING */}
        {/* ========================= */}

        <h1 className="text-[24px] font-bold text-[#294B38] mb-3">
          Payment Details
        </h1>


        {/* ========================= */}
        {/* TABS */}
        {/* ========================= */}

        <div className="w-full h-[40px] border border-[#294B38] rounded-lg p-1 flex mb-6">

          {/* Fundraiser Details */}
          <button
            type="button"
            onClick={() => setActiveTab("fundraiser")}
            className={`
              flex-1
              rounded-md
              text-xs
              font-medium
              transition
              ${
                activeTab === "fundraiser"
                  ? "bg-[#184D24] text-white"
                  : "text-[#294B38]"
              }
            `}
          >
            Fundraiser Details
          </button>


          {/* Donation Details */}
          <button
            type="button"
            onClick={() => setActiveTab("donation")}
            className={`
              flex-1
              rounded-md
              text-xs
              font-medium
              transition
              ${
                activeTab === "donation"
                  ? "bg-[#184D24] text-white"
                  : "text-[#294B38]"
              }
            `}
          >
            Donation Details
          </button>

        </div>


        {/* ========================= */}
        {/* SEARCH + FILTER */}
        {/* ========================= */}

        <div className="flex items-center justify-between mb-8">

          {/* Search */}
          <div className="relative w-full max-w-[630px]">

            <HiSearch
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              size={20}
            />

            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                h-[52px]
                pl-14
                pr-5
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-sm
                outline-none
                text-sm
                placeholder:text-gray-400
                focus:border-[#184D24]
              "
            />

          </div>


          {/* Filter */}
          <button
            type="button"
            className="
              ml-8
              text-gray-800
              hover:text-[#184D24]
              transition
            "
          >
            <HiFilter size={32} />
          </button>

        </div>


        {/* ========================= */}
        {/* DONATION CARDS */}
        {/* ========================= */}

        <div className="space-y-10">

          <DonationCard type={activeTab} />

          <DonationCard type={activeTab} />

        </div>

      </div>
    </div>
  );
};

export default DonationHistory;