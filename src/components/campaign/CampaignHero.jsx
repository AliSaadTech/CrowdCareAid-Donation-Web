import heroImage from "@/assets/Fundraiser-Details.jpeg";

const CampaignHero = () => {
  return (
    <div
      className="
        relative
        w-full
        h-[160px]
        rounded-lg
        overflow-hidden
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      {/* Dark Green Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-green-900/50
        "
      ></div>

      {/* Text */}
      <div
        className="
          absolute
          bottom-4
          left-6
        "
      >

        <h2
          className="
            text-[#EA7E24]
            text-xl
            font-bold
          "
        >
          Empower Change
        </h2>

        <h1
          className="
            text-white
            text-2xl
            font-bold
          "
        >
          Contribute to Our Cause Today
        </h1>

      </div>

    </div>
  );
};

export default CampaignHero;