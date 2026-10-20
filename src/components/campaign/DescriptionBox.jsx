const DescriptionBox = ({
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (event) => {
    const value = event.target.value;

    setFormData((previousData) => ({
      ...previousData,
      description: value,
    }));
  };

  return (
    <div className="mt-7">

      {/* Heading */}
      <h2 className="text-base font-medium text-[#184D24] mb-3">
        Description
      </h2>

      {/* Textarea */}
      <div className="relative">

        <textarea
          maxLength={500}
          placeholder="Write here"
          value={formData.description}
          onChange={handleChange}
          className={`
            w-full
            h-[140px]
            resize-none
            border
            rounded-lg
            p-4
            text-sm
            outline-none
            placeholder:text-gray-400
            focus:border-[#184D24]
            ${
              errors?.description
                ? "border-red-500"
                : "border-gray-300"
            }
          `}
        />

        {/* Character Counter */}
        <span
          className="
            absolute
            bottom-3
            right-4
            text-xs
            text-gray-400
          "
        >
          {formData.description.length}/500
        </span>

      </div>

      {/* Error Message */}
      {errors?.description && (
        <p className="text-red-500 text-xs mt-1">
          {errors.description}
        </p>
      )}

    </div>
  );
};

export default DescriptionBox;