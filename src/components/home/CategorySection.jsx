// FILE: src/components/home/CategorySection.jsx
// PURPOSE: Display all category cards

import CategoryCard from "./CategoryCard";

import medicalImage from "@/assets/medical.png";
import educationImage from "@/assets/education.png";
import povertyImage from "@/assets/poverty.png";

const categories = [
  {
    id: 1,
    image: medicalImage,
  },
  {
    id: 2,
    image: educationImage,
  },
  {
    id: 3,
    image: povertyImage,
  },
];

const CategorySection = () => {
  return (
    <section className="mt-10">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">
        Categories
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            image={category.image}
          />
        ))}

      </div>

    </section>
  );
};

export default CategorySection;