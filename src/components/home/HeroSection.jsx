// FILE: src/components/home/HeroSection.jsx
// PURPOSE: Home page hero banner

// Import Hero Banner Image
import heroBanner from "@/assets/hero-banner.jpeg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-8">

      {/* Main Heading */}
<h2 className="text-[32px] md:text-[32px] font-bold text-[#EA7E24] leading-[1.25] mb-6">
            What Do You Want to Donate Today?
      </h2>

      {/* Banner */}
      <div
className="relative h-[282px] md:h-[250px] rounded-3xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >

        
      {/* Green Overlay */}
<div className="absolute inset-0 bg-[#1A3F1ED9]/50"></div>

{/* Blur Layer */}
<div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* Banner Content */}
<div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-10">
         <h3 className="text-white text-[36px] md:text-4xl font-bold leading-[1.15] mb-6 max-w-[330px]">
            Start Your Own Funding
          </h3>

          <button
           type="button"
  onClick={() => navigate("/create-campaign")}
           className="
  w-fit
  bg-[#EA7E24]
  hover:bg-orange-600
  text-white
  px-8
  py-3
  rounded-lg
  font-medium
  transition
"
          >
            Start Campaign
          </button>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;