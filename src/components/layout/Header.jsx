// FILE: src/components/layout/Header.jsx
// PURPOSE: Sticky top bar with page title, user profile pill, notification bell.
//          Matches Figma exactly — no functionality, just UI.
import { useLocation, useNavigate } from "react-router-dom";
import { HiChevronDown, HiBell } from 'react-icons/hi';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitles = {
  "/home": "Home",
  "/create-campaign": "Create Campaign",
  "/create-donation": "Create Donation",
  "/donation-history": "Donation History",
  "/search-campaign": "Search Campaign",
  "/my-campaign-details": "Campaign Details",
  "/settings": "Profile",
  "/my-campaigns": "My Campaigns",
  "/settings/change-password": "Change Password",
  "/settings/faq": "FAQ’s",
  "/settings/privacy-policy": "Privacy Policy",
  "/settings/terms-condition": "Terms & Condition",
};
const pageTitle = pageTitles[location.pathname] || "Dashboard";
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between">

      {/* ── Left: page title ── */}
      {/* <h1 className="text-gray-800 font-semibold text-base">Crowd Care</h1> */}
      <h1 className="pl-12 md:pl-0 text-gray-800 font-semibold text-base">
  {pageTitle}
</h1>

      {/* ── Right: user dropdown + bell ── */}
      <div className="flex items-center gap-3">

        {/* User profile pill — avatar + name + chevron */}
      <button
  type="button"
  onClick={() => navigate("/settings")}
  className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
>
  <img
    src="https://i.pravatar.cc/32?img=47"
    alt="Jane Cooper"
    className="w-7 h-7 rounded-full object-cover"
  />

  <span className="text-sm font-medium text-gray-700">
    Jane Cooper
  </span>

  <HiChevronDown size={16} className="text-gray-400" />
</button>

        {/* Bell notification button */}
        <button
          className="border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors relative"
          aria-label="Notifications"
        >
          <HiBell size={20} className="text-gray-600" />
          {/* Red dot for unread notifications */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

      </div>
    </header>
  );
};

export default Header;