// FILE: src/components/campaign/ReviewCampaign.jsx

const ReviewCampaign = ({ formData, onBack }) => {
  return (
    <div className="w-full">

      {/* ========================= */}
      {/* FUNDRAISER DETAILS */}
      {/* ========================= */}

      <h2 className="text-[#184D24] font-semibold text-[16px] mb-2">
        Fundraiser Details
      </h2>

      <div
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-5
          py-4
          mb-4
        "
      >
        <div className="grid grid-cols-2 gap-y-3 text-sm">

          <span className="text-gray-400">
            Fundraiser Title
          </span>

          <span className="text-gray-700">
            {formData.title}
          </span>

          <span className="text-gray-400">
            Choose Category
          </span>

          <span className="text-gray-700 capitalize">
            {formData.category}
          </span>

          <span className="text-gray-400">
            Location
          </span>

          <span className="text-gray-700">
            {formData.location}
          </span>

          <span className="text-gray-400">
            City
          </span>

          <span className="text-gray-700">
            {formData.city}
          </span>

        </div>
      </div>


      {/* ========================= */}
      {/* AMOUNT DETAILS */}
      {/* ========================= */}

      <h2 className="text-[#184D24] font-semibold text-[16px] mb-2">
        Amount Details
      </h2>

      <div
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-5
          py-4
          mb-4
        "
      >
        <div className="grid grid-cols-2 gap-y-3 text-sm">

          <span className="text-gray-400">
            Amount
          </span>

          <span className="text-gray-700">
            $ {formData.amount}
          </span>

          <span className="text-gray-400">
            Duration Date
          </span>

          <span className="text-gray-700">
            {formData.durationDate}
          </span>

          <span className="text-gray-400">
            Attach Images
          </span>

          <div className="flex items-center gap-2 flex-wrap">

            {formData.images.map((image) => (
              <div
                key={image.id}
                className="w-10 h-6 rounded-md overflow-hidden"
              >
                <img
                  src={image.preview}
                  alt="Attached"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>

        </div>
      </div>


      {/* ========================= */}
      {/* DESCRIPTION */}
      {/* ========================= */}

      <h2 className="text-[#184D24] font-semibold text-[16px] mb-2">
        Description
      </h2>

      <div
        className="
          w-full
          min-h-[102px]
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          text-xs
          text-gray-700
          mb-5
        "
      >
        {formData.description}
      </div>


      {/* ========================= */}
      {/* BUTTONS */}
      {/* ========================= */}

      <div className="flex justify-between">

        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="
            w-[135px]
            h-[40px]
            border
            border-[#EA7E24]
            text-[#EA7E24]
            rounded-xl
            font-medium
            hover:bg-orange-50
            transition
          "
        >
          Back
        </button>

        {/* Create Button */}
        <button
          type="button"
          className="
            w-[135px]
            h-[40px]
            bg-[#EA7E24]
            hover:bg-[#d96f1a]
            text-white
            rounded-xl
            font-medium
            transition
          "
        >
          Create
        </button>

      </div>

    </div>
  );
};

export default ReviewCampaign;