import React from "react";
import { Link } from "react-router-dom";
import child1 from "../assets/child1.png";
import child2 from "../assets/child2.png";
import child3 from "../assets/child3.png";

const MyCampaignCard = ({
  image,
  title,
  percentage,
  startDate,
  endDate,
  country,
  city,
}) => {
 return (
  <Link to="/my-campaign-details" className="block w-full">

    <div
      className="
        w-full
        h-[151px]
        bg-white
        rounded-[10px]
        shadow-sm
        overflow-hidden
        flex
        cursor-pointer
        hover:shadow-md
        transition
      "
    >

      {/* IMAGE */}

      <div className="w-[189px] h-full flex-shrink-0">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

      </div>


      {/* CONTENT */}

      <div className="flex-1 px-6 py-4">

        <h2 className="text-[18px] font-semibold text-gray-900">
          {title}
        </h2>


        <div className="mt-5">

          <div className="flex justify-end mb-1">
            <span className="text-[10px] text-gray-700">
              %{percentage}
            </span>
          </div>

          <div className="w-full h-[3px] bg-gray-400 rounded-full">

            <div
              className="h-full bg-[#174A22] rounded-full"
              style={{ width: `${percentage}%` }}
            />

          </div>

        </div>


        <div className="flex justify-between mt-3">

          <div>

            <p className="text-[11px] text-gray-400">
              Duration Date
            </p>

            <p className="text-[11px] text-gray-900 mt-1">
              {startDate}&nbsp;&nbsp;{endDate}
            </p>

          </div>


          <div className="text-right">

            <p className="text-[11px] text-gray-400">
              {country}
            </p>

            <p className="text-[11px] text-gray-900 mt-1">
              {city}
            </p>

          </div>

        </div>

      </div>

    </div>

  </Link>
);
};

export default MyCampaignCard;