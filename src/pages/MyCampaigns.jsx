import React from "react";
import { Search } from "lucide-react";

import child1 from "../assets/child1.png";
import child2 from "../assets/child2.png";
import child3 from "../assets/child3.png";

import MyCampaignCard from "../components/MyCampaignCard";

const MyCampaigns = () => {

  const campaigns = [
    {
      image: child1,
      title: "Donated for flood victim",
      percentage: 50,
      startDate: "15-07-24",
      endDate: "20-07-24",
      country: "South Africa",
      city: "Cape Town",
    },

    {
      image: child2,
      title: "Donated for flood victim",
      percentage: 50,
      startDate: "15-08-24",
      endDate: "20-08-24",
      country: "Sri Lanka",
      city: "Gampaha",
    },

    {
      image: child3,
      title: "Donated for flood victim",
      percentage: 50,
      startDate: "15-08-24",
      endDate: "20-08-24",
      country: "Sri Lanka",
      city: "Gampaha",
    },
  ];


  return (
    <div className="w-full flex justify-center">

      <div className="w-full max-w-[728px]">

        {/* ================= SEARCH BAR ================= */}

        <div className="w-full h-[57px] rounded-[30px] bg-white shadow-md flex items-center px-8 gap-4">

          <Search
            size={20}
            strokeWidth={1.5}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search"
            className="
              flex-1
              outline-none
              bg-transparent
              text-[13px]
              text-gray-700
              placeholder:text-gray-400
            "
          />

        </div>


        {/* ================= TABS ================= */}

        <div className="w-full h-[57px] mt-7 rounded-[10px] border border-[#174A22] p-2 flex items-center">

          <button
            type="button"
            className="
              w-1/2
              h-full
              rounded-[9px]
              bg-[#174A22]
              text-white
              text-[13px]
              font-medium
            "
          >
            Active
          </button>


          <button
            type="button"
            className="
              w-1/2
              h-full
              rounded-[9px]
              text-[#174A22]
              text-[13px]
              font-medium
            "
          >
            Pending
          </button>

        </div>


        {/* ================= CAMPAIGNS ================= */}

        <div className="mt-7 space-y-7">

          {campaigns.map((campaign, index) => (
            <MyCampaignCard
              key={index}
              image={campaign.image}
              title={campaign.title}
              percentage={campaign.percentage}
              startDate={campaign.startDate}
              endDate={campaign.endDate}
              country={campaign.country}
              city={campaign.city}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default MyCampaigns;