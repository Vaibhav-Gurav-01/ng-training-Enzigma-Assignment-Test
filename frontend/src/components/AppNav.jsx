import React, { useState, useEffect } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import showToast from "./toastNotification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppNav = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    "New comment on your post",
    "Your profile was updated successfully",
    "Password changed successfully",
  ]);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const notificationDropdown = document.getElementById(
        "notificationDropdown"
      );
      if (
        notificationDropdown &&
        !notificationDropdown.contains(event.target) &&
        event.target.id !== "notificationIcon"
      ) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handler functions
  const handleDarkMode = () => {
    alert("Dark Mode toggled!");
    // Implement your dark mode toggle logic here
  };

  const handleNotificationsToggle = () => {
    setIsNotificationsOpen((prev) => !prev); // Toggle notifications dropdown
  };

  const handleAccount = () => {
    navigate("/account");
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/logout/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      showToast("An error occurred. Please try again later.", "error");
    }
  };

  return (
    <div className="p-4 flex justify-between items-center m-2 border-b-2 border-gray-200">
      {/* Left Placeholder */}

      {/* Centered search bar */}
      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center w-full max-w-lg bg-white p-2 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0 text-gray-700"
          />
          <button className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition">
            <FiSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* Icons section */}
      <div className="flex items-center space-x-4 mr-4 relative">
        {/* Dark Mode */}
        <button
          onClick={handleDarkMode}
          className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 hover:bg-gray-200 transition"
        >
          <DarkModeOutlinedIcon />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            id="notificationIcon"
            onClick={handleNotificationsToggle}
            className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 hover:bg-gray-200 transition relative"
          >
            <NotificationsNoneIcon />
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
            )}
          </button>
          {isNotificationsOpen && (
            <div
              id="notificationDropdown"
              className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
            >
              <div className="p-4 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700">
                  Notifications
                </h4>
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 text-sm text-gray-600 border-b border-gray-100 hover:bg-gray-50 transition"
                    >
                      {notification}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-gray-500 text-center">
                    No new notifications
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <button
                  className="text-indigo-600 text-sm hover:underline"
                  onClick={() => {
                    setNotifications([]);
                    setIsNotificationsOpen(false);
                  }}
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Account */}
        <button
          onClick={handleAccount}
          className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 hover:bg-gray-200 transition"
        >
          <AccountCircleOutlinedIcon />
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600 hover:bg-gray-200 transition"
        >
          <LogoutIcon />
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppNav;
