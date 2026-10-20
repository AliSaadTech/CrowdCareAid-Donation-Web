import FundraiserCard from "./FundraiserCard";

import child1 from "@/assets/child1.png";
import child2 from "@/assets/child2.png";
import child3 from "@/assets/child3.png";

const fundraiserData = [
  {
    id: 1,
    image: child1,
    title: "Health And Medical",
    raised: "4,000",
    target: "4,000",
    progress: 100,
    category: "Medical",
    location: "New york",
  },
  {
    id: 2,
    image: child2,
    title: "Poverty Children Need Food",
    raised: "2,000",
    target: "4,000",
    progress: 50,
    category: "Education",
    location: "New york",
  },
  {
    id: 3,
    image: child3,
    title: "Charity for Poverty",
    raised: "4,000",
    target: "4,000",
    progress: 100,
    category: "Poverty",
    location: "New york",
  },
];

const FundraiserSection = ({ title }) => {
  return (
    <section className="mt-8">
     <h2 className="text-4xl font-bold text-[#184D24] mb-6">
  {title}
</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fundraiserData.map((item) => (
          <FundraiserCard
            key={item.id}
            image={item.image}
            title={item.title}
            raised={item.raised}
            target={item.target}
            progress={item.progress}
            category={item.category}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
};

export default FundraiserSection;