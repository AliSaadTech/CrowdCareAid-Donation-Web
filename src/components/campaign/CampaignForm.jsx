const CampaignForm = ({ formData, setFormData, errors }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <div className="mt-8 space-y-4">

      {/* Title */}
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          className={`
            w-full h-[42px] px-4 rounded-lg bg-white shadow-md
            outline-none text-sm placeholder:text-gray-400
            ${errors?.title ? "border border-red-500" : ""}
          `}
        />

        {errors?.title && (
          <p className="text-red-500 text-xs mt-1">
            {errors.title}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`
            w-full h-[42px] px-4 rounded-lg bg-white shadow-md
            outline-none text-sm
            ${formData.category ? "text-gray-700" : "text-gray-400"}
            ${errors?.category ? "border border-red-500" : ""}
          `}
        >
          <option value="">Choose Category</option>
          <option value="medical">Medical</option>
          <option value="education">Education</option>
          <option value="poverty">Poverty</option>
        </select>

        {errors?.category && (
          <p className="text-red-500 text-xs mt-1">
            {errors.category}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={handleChange}
          className={`
            w-full h-[42px] px-4 rounded-lg bg-white shadow-md
            outline-none text-sm placeholder:text-gray-400
            ${errors?.location ? "border border-red-500" : ""}
          `}
        />

        {errors?.location && (
          <p className="text-red-500 text-xs mt-1">
            {errors.location}
          </p>
        )}
      </div>

      {/* City */}
      <div>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className={`
            w-full h-[42px] px-4 rounded-lg bg-white shadow-md
            outline-none text-sm placeholder:text-gray-400
            ${errors?.city ? "border border-red-500" : ""}
          `}
        />

        {errors?.city && (
          <p className="text-red-500 text-xs mt-1">
            {errors.city}
          </p>
        )}
      </div>

    </div>
  );
};

export default CampaignForm;