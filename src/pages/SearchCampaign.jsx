import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import SearchCampaignCard from "@/components/search/SearchCampaignCard";
const SearchCampaign = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full">

      {/* ================= PAGE CONTENT ================= */}

      <div className="w-full max-w-[720px] mx-auto py-8">

        {/* Page Heading */}
        <h1 className="text-[24px] font-semibold text-black mb-8">
          Search Campaign
        </h1>


        {/* ================= SEARCH BAR ================= */}

        <div className="relative w-full">

          <HiSearch
            size={22}
            className="
              absolute
              left-7
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
              w-full
              h-[52px]
              pl-16
              pr-6
              rounded-full
              border
              border-gray-200
              bg-white
              shadow-md
              outline-none
              text-sm
              placeholder:text-gray-400
              focus:border-[#2D6A35]
            "
          />

        </div>


        {/* ================= EMPTY STATE ================= */}

        {/* <div className="flex flex-col items-center justify-center mt-24">
          <img
            src="/src/assets/no-data.png"
            alt="No data available"
            className="w-[220px] h-auto object-contain"
          />
        </div> */}

        <div className="space-y-6 mt-6">

  <SearchCampaignCard
    image="/src/assets/child1.png"
    title="Donated for flood victim"
    percentage={50}
    startDate="15-07-24"
    endDate="20-07-24"
    country="South Africa"
    city="Cape Town"
  />

  <SearchCampaignCard
    image="/src/assets/child2.png"
    title="Donated for flood victim"
    percentage={50}
    startDate="15-08-24"
    endDate="20-08-24"
    country="Sri Lanka"
    city="Gampaha"
  />

  <SearchCampaignCard
    image="/src/assets/child3.png"
    title="Donated for flood victim"
    percentage={50}
    startDate="15-08-24"
    endDate="20-08-24"
    country="Sri Lanka"
    city="Gampaha"
  />

</div>

      </div>

    </div>
  );
};

export default SearchCampaign;