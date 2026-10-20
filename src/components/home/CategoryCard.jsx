// FILE: src/components/home/CategoryCard.jsx
// PURPOSE: Reusable Category Card

const CategoryCard = ({ image}) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-1
        h-20
        flex
        flex-col
        items-center
        justify-center
        hover:shadow-lg
        transition
        cursor-pointer
      "
    >
      {/* Category Image */}
      <img
        src={image}
       className="w-36 h-36 object-contain"
      />
    </div>
  );
};

export default CategoryCard;