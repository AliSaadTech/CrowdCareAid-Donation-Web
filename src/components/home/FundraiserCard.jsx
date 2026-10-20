// FILE: src/components/home/FundraiserCard.jsx

const FundraiserCard = ({
  image,
  title,
  raised,
  target,
  progress,
  category,
  location,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[200px] md:h-[120px] object-cover"
      />

      <div className="p-5 md:p-3">

        {/* Title */}
        <h3 className="text-center font-semibold text-[22px] md:text-[16px] leading-[1.35] mb-4 md:mb-2">
          {title}
        </h3>

        {/* Percentage */}
        <div className="flex justify-end mb-1">
          <span className="text-[15px] md:text-[13px] text-gray-600 font-medium">
            {progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[5px] md:h-[4px] bg-gray-300 rounded-full mb-5 md:mb-4">

          <div
            className="bg-[#184D24] h-full rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {/* Raised & Target */}
<div className="flex justify-between gap-4 mb-5 md:mb-3">
          <div>

<p className="text-gray-400 text-[15px] md:text-sm">
                Raised of
              <span className="ml-1 font-bold text-black text-[20px] md:text-lg">
                ${raised}
              </span>
            </p>

          </div>

          <div>

            <p className="text-gray-400 text-sm">
              Target
              <span className="ml-1 font-bold text-black text-lg">
                ${target}
              </span>
            </p>

          </div>

        </div>

        {/* Category & Location */}
        <div className="flex justify-between gap-4 text-gray-400 text-[15px] md:text-sm mb-6 md:mb-4">

          <span>{category}</span>

          <span>{location}</span>

        </div>

        {/* Button */}
        <div className="flex justify-center">

          <button
           className="
  w-full
  md:w-[95px]
  h-[44px]
  md:h-[32px]
  bg-[#184D24]
  hover:bg-[#12391b]
  rounded-md
  text-white
  text-[15px]
  md:text-sm
"
          >
            View
          </button>

        </div>

      </div>

    </div>
  );
};

export default FundraiserCard;