import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
     <Sidebar
  onSignOut={() => setShowSignOutModal(true)}
  onDeleteAccount={() => setShowDeleteModal(true)}
/>

      {/* Right Side */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-8 py-6">
          {children}
        </main>

      </div>

      {/* ================= SIGN OUT MODAL ================= */}
      {showSignOutModal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[100] bg-black/50"
            onClick={() => setShowSignOutModal(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">

            <div className="w-full max-w-[304px] bg-white rounded-[8px] overflow-hidden shadow-2xl">

              {/* Modal Header */}
              <div className="h-[61px] bg-[#174A22] flex items-center justify-center">
                <h2 className="text-white text-[22px] font-semibold">
                  Sign out
                </h2>
              </div>

              {/* Modal Content */}
              <div className="h-[107px] flex flex-col items-center justify-center">

                <p className="text-[13px] font-medium text-gray-900">
                  Jane Cooper
                </p>

                <p className="mt-2 text-[11px] text-gray-900">
                  Are you sure you want sign out this account?
                </p>

              </div>

              {/* Buttons */}
              <div className="flex h-[36px]">

                <button
                  type="button"
                  onClick={() => setShowSignOutModal(false)}
                  className="w-1/2 bg-[#F58220] text-white text-[12px] font-medium"
                >
                  No
                </button>

                <button
                  type="button"
                  onClick={() => setShowSignOutModal(false)}
                  className="w-1/2 bg-[#174A22] text-white text-[12px] font-medium"
                >
                  Yes
                </button>

              </div>

            </div>
          </div>
        </>
      )}
      {showDeleteModal && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 z-[100] bg-black/50"
      onClick={() => setShowDeleteModal(false)}
    />

    {/* Modal */}
    <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">
      <div className="w-full max-w-[304px] bg-white rounded-[8px] overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="h-[61px] bg-[#174A22] flex items-center justify-center">
          <h2 className="text-white text-[22px] font-semibold">
            Delete Account
          </h2>
        </div>

        {/* Content */}
        <div className="h-[107px] flex flex-col items-center justify-center px-4 text-center">
          <p className="text-[13px] font-medium text-gray-900">
            Jane Cooper
          </p>

          <p className="mt-2 text-[11px] text-gray-900">
            Are you sure you want to delete this account?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex h-[36px]">
          <button
            type="button"
            onClick={() => setShowDeleteModal(false)}
            className="w-1/2 bg-[#F58220] text-white text-[12px] font-medium"
          >
            No
          </button>

          <button
            type="button"
            onClick={() => setShowDeleteModal(false)}
            className="w-1/2 bg-[#174A22] text-white text-[12px] font-medium"
          >
            Yes
          </button>
        </div>

      </div>
    </div>
  </>
)}

    </div>
  );
};

export default DashboardLayout;