// FILE: src/components/layout/Sidebar.jsx
// PURPOSE: Left sidebar with logo, nav links, active highlight.
//          - Desktop: always visible (240px)
//          - Mobile: hidden behind hamburger button

import { useState } from 'react';
import { useLocation, NavLink } from "react-router-dom";
import {
  HiHome,
  HiPlusCircle,
  HiClock,
  HiSearch,
  HiCog,
  HiHeart,
  HiMenu,
  HiX,
} from "react-icons/hi";

// All sidebar nav items in one place — easy to add/remove
// const navItems = [
//   { id: 'nav-home',     label: 'Home',            to: '/home',                icon: HiHome           },
//   { id: 'nav-campaign', label: 'Create Campaign',  to: '/create-campaign', icon: HiPlusCircle     },
//   { id: 'nav-donation', label: 'Create Donation',  to: '/create-donation', icon: HiCurrencyDollar },
//   { id: 'nav-settings', label: 'Setting',          to: '/settings',        icon: HiCog            },
// ];

const navItems = [
  {
    id: "nav-home",
    label: "Home",
    to: "/home",
    icon: HiHome,
  },
  {
    id: "nav-campaign",
    label: "Create Campaign",
    to: "/create-campaign",
    icon: HiPlusCircle,
  },
  {
    id: "nav-history",
    label: "Donation History",
    to: "/donation-history",
    icon: HiClock,
  },
  {
    id: "nav-search",
    label: "Search",
    to: "/search-campaign",
    icon: HiSearch,
  },
  {
    id: "nav-settings",
    label: "Setting",
    to: "/settings",
    icon: HiCog,
  },
  {
  id: "nav-my-campaigns",
  label: "My Campaigns",
  to: "/my-campaigns",
  icon: HiHeart,
},
];

const Sidebar = ({ onSignOut, onDeleteAccount }) => {
  // Controls mobile drawer open/close
  const [mobileOpen, setMobileOpen] = useState(false);

   const location = useLocation();
   const isCreateCampaignPage =
  location.pathname === "/create-campaign";
  const isMyCampaignsPage =
  location.pathname === "/my-campaigns" ||
  location.pathname === "/my-campaign-details";
  const isSettingsPage =
  location.pathname === "/settings" ||
  location.pathname === "/settings/change-password" ||
  location.pathname === "/settings/faq" ||
  location.pathname === "/settings/privacy-policy" ||
  location.pathname === "/settings/terms-condition";
  // Shared sidebar body — used in both desktop and mobile
  const SidebarBody = () => (
<div className="flex flex-col h-screen overflow-y-auto bg-[#2D6A35]">
      {/* ── Logo box ── white rounded rectangle at top */}
      <div className="px-5 pt-6 pb-8">
        <div className="bg-white rounded-xl px-4 py-3 text-center shadow-sm">
          {/* "Crowd" in muted green, "CareAid" styled with orange C */}
          <span className="font-bold text-lg tracking-tight">
            <span className="text-[#2D6A35]">Crowd</span>
            <span className="text-[#E07B24]">C</span>
            <span className="text-[#2D6A35]">areAid</span>
          </span>
        </div>
      </div>

      {/* ── Navigation links ── */}
     {/* ── Navigation links ── */}
<nav className="flex flex-col gap-1 px-3">
  {navItems
    .filter((item) => {
      if (
        isCreateCampaignPage &&
        item.to === "/create-donation"
      ) {
        return false;
      }

      return true;
    })
    .map(({ id, label, to, icon: Icon }) => (
      <div key={id}>

       {/* Main Navigation Item */}
<NavLink
  to={to}
  end={to === "/"}
  onClick={() => setMobileOpen(false)}
  className={({ isActive }) => {
    const active =
      isActive ||
      (label === "My Campaigns" && isMyCampaignsPage);

    return `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150
      ${
        active
          ? "bg-white text-[#174A22]"
          : "text-white/75 hover:bg-white/10 hover:text-white"
      }`;
  }}
>
  <Icon size={20} className="flex-shrink-0" />
  <span>{label}</span>
</NavLink>

        {/* Settings Submenu */}
        {label === "Setting" && isSettingsPage && (
          <div className="flex flex-col gap-1 mt-1 ml-10">

            <NavLink
              to="/settings"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-[12px] font-medium transition-all
                ${
                  isActive
                    ? "bg-white text-[#174A22]"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              My Profile
            </NavLink>

            <button
              type="button"
              className="px-3 py-2 text-left text-[12px] text-white/70 hover:text-white"
            >
              Language
            </button>

           <NavLink
  to="/settings/faq"
  className={({ isActive }) =>
    `px-3 py-2 rounded-lg text-[12px] font-medium transition-all
    ${
      isActive
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`
  }
>
  FAQ
</NavLink>

            <NavLink
  to="/settings/change-password"
  className={({ isActive }) =>
    `px-3 py-2 rounded-lg text-[12px] font-medium transition-all
    ${
      isActive
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`
  }
>
  Change Password
</NavLink>

           <NavLink
  to="/settings/privacy-policy"
  className={({ isActive }) =>
    `px-3 py-2 rounded-lg text-[12px] font-medium transition-all
    ${
      isActive
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`
  }
>
  Privacy Policy
</NavLink>

           <NavLink
  to="/settings/terms-condition"
  className={({ isActive }) =>
    `px-3 py-2 rounded-lg text-[12px] font-medium transition-all
    ${
      isActive
        ? "text-white"
        : "text-white/70 hover:text-white"
    }`
  }
>
  Terms & Condition
</NavLink>

          <button
  type="button"
  onClick={onSignOut}
  className="px-3 py-2 text-left text-[12px] text-white/70 hover:text-white"
>
  Log out
</button>

           <button
  type="button"
  onClick={onDeleteAccount}
  className="px-3 py-2 text-left text-[12px] text-red-500 hover:text-red-400"
>
  Delete Account
</button>

          </div>
        )}
      </div>
    ))}
</nav>
    </div>
  );

  return (
    <>
      {/* ── Desktop sidebar — always visible ── */}
<aside className="hidden md:block w-[240px] h-screen flex-shrink-0 shadow-xl">
    <SidebarBody />
</aside>

      {/* ── Mobile: hamburger button ── */}
      <button
  onClick={() => setMobileOpen(true)}
  className="md:hidden fixed top-4 left-4 z-50 bg-[#2D6A35] text-white p-2 rounded-lg shadow-lg"
  aria-label="Open menu"
>
  <HiMenu size={22} />
</button>

      {/* ── Mobile: dark overlay behind drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile: slide-in drawer ── */}
     <aside
  className={`
    md:hidden fixed top-0 left-0 h-screen w-[240px] z-50 shadow-2xl
    transform transition-transform duration-300 overflow-hidden
    ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
  `}
>
        {/* Close button inside drawer */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
          aria-label="Close menu"
        >
          <HiX size={22} />
        </button>
        <SidebarBody />
      </aside>
    </>
  );
};

export default Sidebar;