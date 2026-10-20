import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FundraiserSection from "@/components/home/FundraiserSection";

const Home = () => {
  return (
    <>
      <HeroSection />

      <CategorySection />

      <FundraiserSection title="Top Fundraiser" />

      <FundraiserSection title="Recent Project" />
    </>
  );
};

export default Home;