

import { Routes, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Login from "@/pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/OtpVerification";
import ChangePassword from "@/pages/ChangePassword";

import DashboardLayout from "@/components/layout/DashboardLayout";

import Home from "@/pages/Home";
import CreateCampaign from "@/pages/CreateCampaign";
import CreateDonation from "@/pages/CreateDonation";
import Settings from "@/pages/Settings";
import DonationHistory from "@/pages/DonationHistory";
import SearchCampaign from "@/pages/SearchCampaign";
import CampaignDetails from "../pages/CampaignDetails";
import MyCampaigns from "@/pages/MyCampaigns";
import MyCampaignDetails from "@/pages/MyCampaignDetails";
import Receipt from "@/pages/Receipt";
import SettingsChangePassword from "@/pages/SettingsChangePassword";
import FAQ from "@/pages/FAQ";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsCondition from "@/pages/TermsCondition";


const AppRouter = () => {
  return (
    <Routes>

      {/* Authentication Pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<OtpVerification />} />
      <Route path="/change-password" element={<ChangePassword />} />

      {/* Dashboard Pages */}
      {/* <Route
        path="/"
        element={
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        }
      /> */}

      <Route
        path="/home"
        element={
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        }
      />

      <Route
        path="/create-campaign"
        element={
          <DashboardLayout>
            <CreateCampaign />
          </DashboardLayout>
        }
      />

      <Route
        path="/create-donation"
        element={
          <DashboardLayout>
            <CreateDonation />
          </DashboardLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        }
      />
      <Route
        path="/donation-history"
        element={
          <DashboardLayout>
            <DonationHistory />
          </DashboardLayout>
        }
      />
      <Route
        path="/search-campaign"
        element={
          <DashboardLayout>
            <SearchCampaign />
          </DashboardLayout>
        }
      />
      <Route
  path="/campaign-details"
  element={
    <DashboardLayout>
      <CampaignDetails />
    </DashboardLayout>
  }
/>
<Route
  path="/my-campaigns"
  element={
    <DashboardLayout>
      <MyCampaigns />
    </DashboardLayout>
  }
/>
<Route
  path="/my-campaign-details"
  element={
    <DashboardLayout>
      <MyCampaignDetails />
    </DashboardLayout>
  }
/>
<Route
  path="/receipt"
  element={
    <Receipt />
  }
/>
<Route
  path="/settings/change-password"
  element={
    <DashboardLayout>
      <SettingsChangePassword />
    </DashboardLayout>
  }
/>
<Route
  path="/settings/faq"
  element={
    <DashboardLayout>
      <FAQ />
    </DashboardLayout>
  }
/>
<Route
  path="/settings/privacy-policy"
  element={
    <DashboardLayout>
      <PrivacyPolicy />
    </DashboardLayout>
  }
/>
<Route
  path="/settings/terms-condition"
  element={
    <DashboardLayout>
      <TermsCondition />
    </DashboardLayout>
  }
/>
    </Routes>
  );
};

export default AppRouter;