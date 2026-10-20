import React from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { useRef } from "react";
const Receipt = () => {
  const receiptRef = useRef(null);
  const navigate = useNavigate();
const handleDownload = async () => {
  try {
    if (!receiptRef.current) return;

    const original = receiptRef.current;

    // Make a temporary copy of the receipt
    const clone = original.cloneNode(true);

    // Put clone outside the visible page
    clone.style.position = "fixed";
    clone.style.left = "-10000px";
    clone.style.top = "0";
    clone.style.width = `${original.offsetWidth}px`;
    clone.style.backgroundColor = "#ffffff";

    document.body.appendChild(clone);

    // Replace problematic CSS colors with safe colors
    const elements = clone.querySelectorAll("*");

    elements.forEach((element) => {
      const computed = window.getComputedStyle(element);

      if (computed.color.includes("oklch")) {
        element.style.color = "#111827";
      }

      if (computed.backgroundColor.includes("oklch")) {
        element.style.backgroundColor = "#ffffff";
      }

      if (computed.borderColor.includes("oklch")) {
        element.style.borderColor = "#9CA3AF";
      }
    });

    const canvas = await html2canvas(clone, {
      backgroundColor: "#ffffff",
      scale: 2,
      useCORS: true,
      logging: false,
    });

    // Remove temporary copy
    document.body.removeChild(clone);

    // Download image
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "crowdcareaid-receipt.png";
    link.href = image;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error("Receipt download failed:", error);
  }
};
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center">
<div className="w-full max-w-[1026px] min-h-screen bg-white px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
       {/* Logo */}
<div>
  <h1 className="text-[38px] font-bold">
    <span className="text-[#174A22]">Crowd</span>
    <span className="text-[#E07B24]">C</span>
    <span className="text-gray-900">areAid</span>
  </h1>
</div>

{/* Success */}
<div className="flex flex-col items-center mt-8">
  <div className="w-[120px] h-[120px] rounded-full bg-[#174A22] flex items-center justify-center">
    <span className="text-white text-[75px] leading-none">
      ✓
    </span>
  </div>

  <h2 className="mt-6 text-[16px] font-semibold text-gray-900">
    Successfully Send Amount
  </h2>
</div>
        {/* ================= RECEIPT CARD ================= */}
<div
  ref={receiptRef}
  className="w-full max-w-[618px] min-h-[365px] bg-white rounded-[8px] shadow-sm mx-auto mt-8 px-5 sm:px-7 md:px-10 py-6 sm:py-7 md:py-8"
>
    {/* Top Details */}
  <div className="space-y-6">

    <div className="flex justify-between">
      <span className="text-[15px] text-gray-500">
        Campaign Name
      </span>
      <span className="text-[15px] font-medium text-gray-900">
        Flood Victom
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-[15px] text-gray-500">
        Send Amount
      </span>
      <span className="text-[15px] font-medium text-gray-900">
        $ 500
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-[15px] text-gray-500">
        Status
      </span>
      <span className="text-[15px] font-medium text-gray-900">
        Success
      </span>
    </div>

  </div>

  {/* Dashed Separator */}
  <div className="relative my-8">
    <div className="border-t border-dashed border-gray-400" />

    <div className="absolute -left-[52px] -top-[25px] w-[50px] h-[50px] rounded-full bg-[#F5F5F5]" />

    <div className="absolute -right-[52px] -top-[25px] w-[50px] h-[50px] rounded-full bg-[#F5F5F5]" />
  </div>

  {/* Bottom Details */}
  <div className="space-y-6">

    <div className="flex justify-between">
      <span className="text-[15px] text-gray-500">
        Send Date
      </span>
      <span className="text-[15px] font-medium text-gray-900">
        15-09-2024
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-[15px] text-gray-500">
        transaction ID
      </span>
      <span className="text-[15px] font-medium text-gray-900">
        #12345678
      </span>
    </div>

    <div className="flex justify-between">
      <span className="text-[15px] text-gray-500">
        Category
      </span>
      <span className="text-[15px] font-medium text-gray-900">
        Flood Victom
      </span>
    </div>

  </div>

</div>
{/* ================= ACTION BUTTONS ================= */}
<div className="w-full max-w-[618px] mx-auto mt-7 flex gap-4 sm:gap-6 md:gap-10">
<button
  type="button"
  onClick={() => navigate("/home")}
  className="w-1/2 h-[48px] sm:h-[52px] md:h-[56px] rounded-[10px] border border-[#174A22] text-[#174A22] text-[12px] sm:text-[14px] md:text-[16px] font-medium"
>
  Back to Home
</button>

<button
  type="button"
  onClick={handleDownload}
  className="w-1/2 h-[48px] sm:h-[52px] md:h-[56px] rounded-[10px] bg-[#174A22] text-white text-[12px] sm:text-[14px] md:text-[16px] font-medium"
>
  Download
</button>
</div>

      </div>
    </div>
  );
};

export default Receipt;