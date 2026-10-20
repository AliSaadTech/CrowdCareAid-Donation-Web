import React, { useState } from "react";

const TermsCondition = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const terms = [
    {
      title: "What does lorem means",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Whare can i subscribe to your newsletter?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Whare can i subscribe to your newsletter?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Whare can i subscribe to your newsletter?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[704px]">

        {/* Page Title */}
        <h1 className="text-[25px] font-semibold text-[#174A22]">
          Terms &amp; Condition
        </h1>

        {/* Terms List */}
        <div className="mt-6 space-y-7">
          {terms.map((term, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full bg-white rounded-[10px] shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full min-h-[62px] px-6 flex items-center justify-between text-left"
                >
                  <span className="text-[13px] font-semibold text-[#174A22]">
                    {term.title}
                  </span>

                  <span className="w-[22px] h-[22px] rounded-full bg-[#174A22] text-white flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <span className="text-[17px] leading-none mb-[2px]">
                        −
                      </span>
                    ) : (
                      <span className="text-[16px] leading-none">
                        +
                      </span>
                    )}
                  </span>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-[12px] leading-[18px] text-gray-900">
                      {term.content}
                    </p>

                    <p className="mt-4 text-[12px] leading-[18px] text-gray-900">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default TermsCondition;