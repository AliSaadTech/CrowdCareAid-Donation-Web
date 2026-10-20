import { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const DonationCard = ({ type = "fundraiser" }) => {
  const [isOpen, setIsOpen] = useState(true);

  const images = [
    "/src/assets/child1.png",
    "/src/assets/child2.png",
    "/src/assets/child3.png",
    "/src/assets/child4.png",
    "/src/assets/child5.png",
    "/src/assets/child6.png",
    "/src/assets/child1.png",
    "/src/assets/child2.png",
  ];

  return (
    <div className="relative w-full mb-12">
      <div
        className="
          w-full
          bg-white
          border
          border-gray-200
          rounded-xl
          shadow-sm
          px-5
          py-5
        "
      >
        {/* ================= HEADER ================= */}

        <div className="flex items-start justify-between">
          <h2 className="text-[17px] font-semibold text-[#294B38]">
            Fund for children education
          </h2>

          {/* Top Right Arrow */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              text-[#315440]
              hover:text-[#184D24]
              transition
            "
          >
            {isOpen ? (
              <HiChevronUp size={28} />
            ) : (
              <HiChevronDown size={28} />
            )}
          </button>
        </div>

        {/* ================= CLOSED CONTENT ================= */}

        {!isOpen && (
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] text-gray-400">
                  Amount Target
                </p>

                <p className="text-[17px] font-semibold text-gray-800">
                  $1,000
                </p>
              </div>

              <div className="text-right">
                <p className="text-[13px] text-gray-400">
                  Fundraiser
                </p>

                <p className="text-[17px] font-semibold text-gray-800">
                  $1,000
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= OPEN CONTENT ================= */}

        {isOpen && (
          <>
            {/* Description */}

            <p className="mt-5 text-[13px] leading-[18px] text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            {/* ================= IMAGES ================= */}

            <div className="flex items-center gap-2 mt-5 overflow-x-auto scrollbar-hide">
  {images.map((image, index) => (
    <div
      key={index}
      className="
        w-[58px]
        h-[34px]
        rounded-md
        overflow-hidden
        flex-shrink-0
      "
    >
      <img
        src={image}
        alt={`Campaign ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

            {/* ================= AMOUNT SECTION ================= */}

            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-gray-400">
                  Amount Target
                </span>

                <span className="text-[18px] font-semibold text-gray-800">
                  $1,000
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[13px] text-gray-400">
                  Fundraiser
                </span>

                <span className="text-[18px] font-semibold text-gray-800">
                  $1,000
                </span>
              </div>
            </div>

            {/* ================= PROGRESS ================= */}

            <div className="mt-5">
              <div className="flex justify-end">
                <span className="text-[12px] text-gray-700">
                  %100
                </span>
              </div>

              <div
                className="
                  w-full
                  h-[3px]
                  bg-[#315440]
                  rounded-full
                  mt-1
                "
              />
            </div>

            {/* ================= DURATION + LOCATION ================= */}

            <div className="flex justify-between mt-4">
              <div>
                <p className="text-[13px] text-gray-400">
                  Duration Date
                </p>

                <p className="text-[13px] text-gray-700 mt-2">
                  15-06-2024&nbsp;&nbsp;20-06-2024
                </p>
              </div>

              <div className="text-right">
                <p className="text-[13px] text-gray-400">
                  Location
                </p>

                <p className="text-[13px] text-gray-700 mt-2">
                  New York
                </p>
              </div>
            </div>

            {/* ================= DONATION EXTRA DETAILS ================= */}

            {type === "donation" && (
              <>
                {/* Debit Card + Amount */}

                <div className="flex justify-between mt-5">
                  <div>
                    <p className="text-[13px] text-gray-400">
                      Debit Card
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[16px]">
                        💳
                      </span>

                      <span className="text-[13px] text-gray-700">
                        ********1234
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-[13px] text-gray-400">
                      Amount
                    </p>

                    <p className="text-[13px] text-gray-700 mt-2">
                      $300
                    </p>
                  </div>
                </div>

                {/* Day/Date + Time */}

                <div className="flex justify-between mt-5">
                  <div>
                    <p className="text-[13px] text-gray-400">
                      Day / Date
                    </p>

                    <p className="text-[13px] text-gray-700 mt-2">
                      Mon,15-06-2024
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[13px] text-gray-400">
                      Time
                    </p>

                    <p className="text-[13px] text-gray-700 mt-2">
                      10:30 am
                    </p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* ================= BOTTOM CENTER ARROW ================= */}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -bottom-5
          w-[42px]
          h-[42px]
          rounded-full
          bg-[#E5E7EB]
          flex
          items-center
          justify-center
          text-gray-700
          shadow-sm
          hover:bg-gray-300
          transition
        "
      >
        {isOpen ? (
          <HiChevronUp size={24} />
        ) : (
          <HiChevronDown size={24} />
        )}
      </button>
    </div>
  );
};

export default DonationCard;