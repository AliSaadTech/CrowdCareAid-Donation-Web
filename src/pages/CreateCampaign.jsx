import { useState } from "react";

import CampaignSteps from "@/components/campaign/CampaignSteps";
import CampaignHero from "@/components/campaign/CampaignHero";
import CampaignForm from "@/components/campaign/CampaignForm";
import AmountFields from "@/components/campaign/AmountFields";
import ImageUpload from "@/components/campaign/ImageUpload";
import DescriptionBox from "@/components/campaign/DescriptionBox";
import ReviewCampaign from "@/components/campaign/ReviewCampaign";

const CreateCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // All campaign form data
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    city: "",
    amount: "",
    durationDate: "",
    images: [],
    description: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // =========================
  // STEP 1 VALIDATION
  // =========================
  const validateStep1 = () => {
    const newErrors = {};

    if (formData.title.trim() === "") {
      newErrors.title = "Please fill this field";
    }

    if (formData.category === "") {
      newErrors.category = "Please select a category";
    }

    if (formData.location.trim() === "") {
      newErrors.location = "Please fill this field";
    }

    if (formData.city.trim() === "") {
      newErrors.city = "Please fill this field";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // STEP 2 VALIDATION
  // =========================
  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.amount) {
      newErrors.amount = "Please fill this field";
    }

    if (!formData.durationDate.trim()) {
      newErrors.durationDate = "Please fill this field";
    }

    if (formData.images.length === 0) {
      newErrors.images = "Please upload at least one image";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Please fill this field";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // STEP 1 CONTINUE
  // =========================
  const handleStep1Continue = () => {
    if (validateStep1()) {
      setErrors({});
      setCurrentStep(2);
    }
  };

  // =========================
  // STEP 2 CONTINUE
  // =========================
  const handleStep2Continue = () => {
    if (validateStep2()) {
      setErrors({});
      setCurrentStep(3);
    }
  };

  return (
    <>
      {/* Orange Header */}
      <div className="-mx-8">
        <div className="bg-[#F58220] h-[48px] flex items-center justify-center">
          <h1 className="text-white text-2xl font-bold">
            {currentStep === 1
              ? "Fundraiser Details"
              : currentStep === 2
              ? "Amount Details"
              : "Review"}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex mt-6">

        {/* Left Side */}
        <div className="w-[35%]">
          <CampaignSteps currentStep={currentStep} />
        </div>

        {/* Right Side */}
        <div className="w-[65%]">

          {/* ========================= */}
          {/* STEP 1 */}
          {/* ========================= */}
          {currentStep === 1 && (
            <>
              <CampaignHero />

              <CampaignForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleStep1Continue}
                  className="
                    w-[168px]
                    h-[48px]
                    bg-[#EA7E24]
                    hover:bg-[#d96f1a]
                    text-white
                    rounded-xl
                    font-medium
                    transition
                  "
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* ========================= */}
          {/* STEP 2 */}
          {/* ========================= */}
          {currentStep === 2 && (
            <>
              <AmountFields
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <ImageUpload
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <DescriptionBox
                formData={formData}
                setFormData={setFormData}
                errors={errors}
              />

              <div className="flex justify-between mt-8">

                {/* Back */}
                <button
                  type="button"
                  onClick={() => {
                    setErrors({});
                    setCurrentStep(1);
                  }}
                  className="
                    w-[168px]
                    h-[48px]
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

                {/* Continue */}
                <button
                  type="button"
                  onClick={handleStep2Continue}
                  className="
                    w-[168px]
                    h-[48px]
                    bg-[#EA7E24]
                    hover:bg-[#d96f1a]
                    text-white
                    rounded-xl
                    font-medium
                    transition
                  "
                >
                  Continue
                </button>

              </div>
            </>
          )}

          {/* ========================= */}
          {/* STEP 3 - REVIEW */}
          {/* ========================= */}
          {currentStep === 3 && (
            <ReviewCampaign
              formData={formData}
              onBack={() => {
                setErrors({});
                setCurrentStep(2);
              }}
            />
          )}

        </div>
      </div>
    </>
  );
};

export default CreateCampaign;