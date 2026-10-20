const AmountFields = ({
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <div className="flex gap-4">

      {/* Amount */}
      <div className="w-1/2">
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className={`
            w-full
            h-[42px]
            px-4
            rounded-lg
            border
            shadow-sm
            outline-none
            text-sm
            placeholder:text-gray-400
            focus:border-[#184D24]
            ${
              errors?.amount
                ? "border-red-500"
                : "border-gray-200"
            }
          `}
        />

        {errors?.amount && (
          <p className="text-red-500 text-xs mt-1">
            {errors.amount}
          </p>
        )}
      </div>

      {/* Duration Date */}
      <div className="w-1/2">
        <input
          type="text"
          name="durationDate"
          placeholder="Duration Date"
          value={formData.durationDate}
          onChange={handleChange}
          className={`
            w-full
            h-[42px]
            px-4
            rounded-lg
            border
            shadow-sm
            outline-none
            text-sm
            placeholder:text-gray-400
            focus:border-[#184D24]
            ${
              errors?.durationDate
                ? "border-red-500"
                : "border-gray-200"
            }
          `}
        />

        {errors?.durationDate && (
          <p className="text-red-500 text-xs mt-1">
            {errors.durationDate}
          </p>
        )}
      </div>

    </div>
  );
};

export default AmountFields;