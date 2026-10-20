const SearchCampaignCard = ({
  image,
  title,
  percentage = 50,
  startDate,
  endDate,
  country,
  city,
}) => {
  return (
    <div
      className="
        w-full
        h-[130px]
        bg-white
        rounded-xl
        shadow-sm
        border
        border-gray-100
        flex
        overflow-hidden
      "
    >

      {/* ================= IMAGE ================= */}

      <div className="w-[157px] h-full flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>


      {/* ================= CONTENT ================= */}

      <div className="flex-1 px-5 py-4">

        {/* Title */}

        <h2 className="text-[16px] font-semibold text-gray-900">
          {title}
        </h2>


        {/* ================= PROGRESS ================= */}

        <div className="mt-5">

          <div className="flex justify-end mb-1">
            <span className="text-[10px] text-gray-700">
              %{percentage}
            </span>
          </div>


          {/* Progress Background */}

          <div className="w-full h-[3px] bg-gray-300 rounded-full">

            {/* Progress */}

            <div
              className="h-full bg-[#315440] rounded-full"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>


        {/* ================= DETAILS ================= */}

        <div className="flex justify-between mt-2">

          {/* LEFT SIDE */}

          <div>

            <p className="text-[11px] text-gray-400">
              Duration Date
            </p>

            <p className="text-[11px] text-gray-700 mt-1">
              {startDate}&nbsp;&nbsp;{endDate}
            </p>

          </div>


          {/* RIGHT SIDE */}

          <div className="text-right">

            <p className="text-[11px] text-gray-400">
              {country}
            </p>

            <p className="text-[11px] text-gray-700 mt-1">
              {city}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SearchCampaignCard;