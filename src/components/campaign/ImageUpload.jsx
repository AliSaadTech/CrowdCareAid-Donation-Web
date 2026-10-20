import { useState } from "react";

const ImageUpload = ({
  formData,
  setFormData,
  errors,
}) => {

  // Select images
  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Maximum 10 images
    const remainingSlots = 10 - formData.images.length;

    const filesToAdd = selectedFiles.slice(
      0,
      remainingSlots
    );

    const imagePreviews = filesToAdd.map((file) => ({
      id: URL.createObjectURL(file),
      file: file,
      preview: URL.createObjectURL(file),
    }));

    setFormData((previousData) => ({
      ...previousData,
      images: [
        ...previousData.images,
        ...imagePreviews,
      ],
    }));

    // Reset input so the same image can be selected again if needed
    event.target.value = "";
  };

  // Remove image
  const removeImage = (id) => {
    setFormData((previousData) => ({
      ...previousData,
      images: previousData.images.filter(
        (image) => image.id !== id
      ),
    }));
  };

  return (
    <div className="mt-7">

      {/* Heading */}
      <h2 className="text-[#184D24] font-semibold text-[16px] mb-3">
        Attach Images {formData.images.length}/10
      </h2>

      {/* Upload Box */}
      <div
        className={`
          border
          rounded-lg
          min-h-[145px]
          p-3
          flex
          items-center
          gap-4
          ${
            errors?.images
              ? "border-red-500"
              : "border-gray-300"
          }
        `}
      >

        {/* Upload Button */}
        {formData.images.length < 10 && (
          <label
            className="
              w-[48px]
              h-[48px]
              rounded-full
              border
              border-[#184D24]
              flex
              items-center
              justify-center
              cursor-pointer
              flex-shrink-0
              hover:bg-green-50
              transition
            "
          >
            <span className="text-2xl text-[#184D24]">
              +
            </span>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        )}

        {/* Images Preview */}
        <div
          className="
            flex
            flex-wrap
            gap-3
            border
            border-gray-400
            rounded-xl
            p-3
            flex-1
            min-h-[80px]
          "
        >
          {formData.images.map((image) => (
            <div
              key={image.id}
              className="
                relative
                w-[48px]
                h-[32px]
              "
            >
              <img
                src={image.preview}
                alt="Uploaded"
                className="
                  w-full
                  h-full
                  object-cover
                  rounded-md
                "
              />

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => removeImage(image.id)}
                className="
                  absolute
                  -top-2
                  -right-2
                  w-4
                  h-4
                  bg-[#184D24]
                  text-white
                  rounded-full
                  text-[10px]
                  flex
                  items-center
                  justify-center
                "
              >
                ×
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Error Message */}
      {errors?.images && (
        <p className="text-red-500 text-xs mt-1">
          {errors.images}
        </p>
      )}

    </div>
  );
};

export default ImageUpload;