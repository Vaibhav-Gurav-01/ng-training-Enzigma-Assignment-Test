import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash, FiCheck } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showToast from "../components/toastNotification";

const UserDetail = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // To hold the user to be edited
  const [showEditModal, setShowEditModal] = useState(false); // To control modal visibility

  // Filter users based on search and active tab
  const filteredUsers = Array.isArray(users)
    ? users.filter((user) => {
        const matchesSearch =
          (user.username ? user.username.toLowerCase() : "").includes(
            searchTerm.toLowerCase()
          ) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
        if (activeTab === "All") return matchesSearch;
        return (
          matchesSearch &&
          (user.isVerified ? "Verified" : "Not Verified") === activeTab
        );
      })
    : [];

  // Fetch users data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/user/all/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          const result = await response.json();
          showToast(result.message || "Unable to get account info!", "error");
          return;
        }

        const result = await response.json();
        setUsers(Array.isArray(result.data) ? result.data : []);
      } catch (error) {
        showToast("An error occurred while fetching account info.", "error");
        console.error("Fetch Error:", error);
      }
    };

    fetchUserData();
  }, []);

  // Handle edit user
  const handleEdit = (user) => {
    setSelectedUser(user); // Set the user data to be edited
    setShowEditModal(true); // Show the modal
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      // Use updatedUser._id instead of userId
      const response = await fetch(
        `http://localhost:3000/api/v1/user/update/${updatedUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
          credentials: "include", // Sends cookies for authentication if needed
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Update user list in the state
        setUsers(
          users.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
          )
        );
        setShowEditModal(false); // Close the modal
        showToast(result.message, "success");
      } else {
        // Handle failure and show error message
        showToast(result.message || "An error occurred", "error");
      }
    } catch (error) {
      // Catch any other errors
      showToast("An error occurred while updating user.", "error");
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/user/delete/${userId}`, // Send the userId as part of the URL
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        if (response.ok) {
          const result = await response.json();
          setUsers(users.filter((user) => user._id !== userId)); // Remove the deleted user from the UI
          showToast(result.message, "success");
        } else {
          const result = await response.json();
          showToast(result.message, "error");
        }
      } catch (error) {
        showToast("An error occurred while deleting user.", "error");
        console.error("Error deleting user:", error);
      }
    }
  };

  // Handle verify user
  const handleVerify = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/user/verify/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      if (response.ok) {
        const result = await response.json();
        setUsers(
          users.map((user) =>
            user._id === userId ? { ...user, isVerified: true } : user
          )
        ); // Update verification status
        showToast(result.message, "success");
      } else {
        const result = await response.json();
        showToast(result.message, "error");
      }
    } catch (error) {
      showToast("An error occurred while verifying user.", "error");
      console.error("Error verifying user:", error);
    }
  };

  // Toast message function

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>

      {/* Tabs for Filtering */}
      <div className="flex justify-between items-center mb-6">
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          {["All", "Verified", "Not Verified"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition 
              ${
                activeTab === tab ? "bg-indigo-600 text-white" : "text-gray-600"
              }
              hover:bg-indigo-500 hover:text-white`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-50 border-b">
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Name
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Email
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Role
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Status
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  className={`transition hover:shadow-md ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium flex items-center space-x-3">
                    {user.username || "No username"}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-green-100 text-green-600"
                          : user.role === "User"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.isVerified
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.isVerified ? "Verified" : "Not Verified"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center space-x-4">
                    <button
                      className="text-indigo-500 hover:text-indigo-700 transition"
                      onClick={() => handleEdit(user)}
                    >
                      <FiEdit className="text-xl" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600 transition"
                      onClick={() => handleDelete(user._id)}
                    >
                      <FiTrash className="text-xl" />
                    </button>
                    <button
                      className="text-green-500 hover:text-green-600 transition"
                      onClick={() => handleVerify(user._id)}
                    >
                      <FiCheck className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Edit User */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateUser(selectedUser);
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={selectedUser.username}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      username: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={selectedUser.email}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm text-gray-700">
                  Role
                </label>
                <select
                  id="role"
                  value={selectedUser.role}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, role: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Admin">Admin</option>
                  <option value="HR">HR</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="mb-4 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default UserDetail;
