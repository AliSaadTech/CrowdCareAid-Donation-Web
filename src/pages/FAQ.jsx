import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does lorem means",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut dolore magna aliqua.",
    },
    {
      question: "Whare can i subscribe to your newsletter?",
      answer:
        "You can subscribe to our newsletter by entering your email address and submitting the newsletter form.",
    },
    {
      question: "Whare can i subscribe to your newsletter?",
      answer:
        "You can subscribe to our newsletter by entering your email address and submitting the newsletter form.",
    },
    {
      question: "Whare can i subscribe to your newsletter?",
      answer:
        "You can subscribe to our newsletter by entering your email address and submitting the newsletter form.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[586px]">

        {/* Page Title */}
        <h1 className="text-[25px] font-semibold text-[#174A22]">
          FAQ’s
        </h1>

        {/* FAQ List */}
        <div className="mt-6 space-y-5">
          {faqs.map((faq, index) => {
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
                  className="w-full min-h-[50px] px-5 flex items-center justify-between text-left"
                >
                  <span className="text-[13px] font-semibold text-[#174A22]">
                    {faq.question}
                  </span>

                  <span className="w-[20px] h-[20px] rounded-full bg-[#174A22] text-white flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <span className="text-[16px] leading-none mb-[2px]">
                        −
                      </span>
                    ) : (
                      <span className="text-[15px] leading-none">
                        +
                      </span>
                    )}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-[11px] leading-[16px] text-gray-900">
                      {faq.answer}
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

export default FAQ;