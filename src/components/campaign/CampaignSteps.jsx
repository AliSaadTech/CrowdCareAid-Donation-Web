const CampaignSteps = ({ currentStep }) => {
  const steps = [
    {
      id: 1,
      title: "Fundraiser Details",
    },
    {
      id: 2,
      title: "Amount Details",
    },
    {
      id: 3,
      title: "Review",
    },
  ];

  return (
    <div className="relative">

      {steps.map((step, index) => {

        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;

        return (
          <div
            key={step.id}
            className="relative flex items-start mb-28"
          >

            {/* Vertical Line */}
            {index < steps.length - 1 && (
              <div
                className={`
                  absolute
                  left-[14px]
                  top-[28px]
                  w-[2px]
                  h-[112px]
                  ${
                    isCompleted
                      ? "bg-[#184D24]"
                      : "bg-gray-400"
                  }
                `}
              />
            )}

            {/* Circle */}
            <div
              className={`
                relative
                z-10
                w-[28px]
                h-[28px]
                rounded-full
                flex
                items-center
                justify-center
                text-white
                text-sm
                font-medium
                ${
                  isActive || isCompleted
                    ? "bg-[#184D24]"
                    : "bg-gray-400"
                }
              `}
            >
              {isCompleted ? "✓" : step.id}
            </div>

            {/* Step Title */}
            <span
              className={`
                ml-2
                mt-1
                text-xs
                ${
                  isActive || isCompleted
                    ? "text-[#184D24]"
                    : "text-gray-500"
                }
              `}
            >
              {step.title}
            </span>

          </div>
        );
      })}

    </div>
  );
};

export default CampaignSteps;