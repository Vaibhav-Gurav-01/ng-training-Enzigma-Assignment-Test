import React, { useEffect, useState } from "react";
import showToast from "../components/toastNotification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";

const Account = () => {
  const [user, setUser] = useState(null); // State for user data
  const [isLoading, setIsLoading] = useState(true); // State for loader

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/user/account/",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        if (!response.ok) {
          const result = await response.json();
          showToast(result.message || "Unable to get account info!", "error");
          setIsEditingPassword(false);
          setCurrentPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
          setIsLoading(false);
          return;
        }

        const result = await response.json();
        setUser(result.message); // Update user state with fetched data
        setIsLoading(false);
      } catch (error) {
        showToast("An error occurred while fetching account info.", "error");
        console.error("Fetch Error:", error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      showToast("All fields are required.", "error");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      showToast("New password and confirmation do not match.", "error");
      return;
    }

    if (newPassword === currentPassword) {
      showToast("New password matches with old password.", "error");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/change-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ oldPassword: currentPassword, newPassword }),
        }
      );

      const result = await response.json();
      console.log("Response: ", result); // Debugging response

      if (response.ok) {
        showToast("Password updated successfully.", "success");
        setIsEditingPassword(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        showToast(result.message || "Failed to update password.", "error");
      }
    } catch (error) {
      showToast("An error occurred. Please try again later.", "error");
      console.error("Network Error: ", error);
    }
  };

  if (isLoading) {
    return <Loader />; // Show loader while fetching data
  }

  return (
    <div className="py-2">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 text-white px-6 py-4">
          <h1 className="text-2xl font-semibold">Account Settings</h1>
          <p className="text-sm opacity-90">
            Manage your personal information and security
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          {/* Personal Info Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  value={user?.name || ""}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Username
                </label>
                <input
                  type="text"
                  value={user?.username || ""}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  value={user?.email || ""}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Role
                </label>
                <input
                  type="text"
                  value={user?.role || ""}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Verified
                </label>
                <input
                  type="text"
                  value={user?.isVerified ? "Yes" : "No"}
                  disabled
                  className="mt-1 w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Security
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                Password
              </label>
              {!isEditingPassword ? (
                <div className="flex items-center space-x-4">
                  <input
                    type="password"
                    value="********"
                    disabled
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                    onClick={() => setIsEditingPassword(true)}
                  >
                    Change Password
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
                      onClick={handlePasswordChange}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
                      onClick={() => setIsEditingPassword(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Account;
