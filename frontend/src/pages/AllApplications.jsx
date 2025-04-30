import React, { useState } from "react";
import { FiSearch, FiEdit, FiTrash, FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AllApplications = () => {
  const navigate = useNavigate();

  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Verified",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      phone: "9089790890",
      status: "Not Verified",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "9089790890",
      email: "bob.johnson@example.com",
      role: "Viewer",

      status: "Not Verified",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "Admin",
      phone: "9089790890",
      status: "Not Verified",
    },
  ]);

  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === "All") return matchesSearch;
    return matchesSearch && user.status === activeTab;
  });

  const handleclick = (e) => {
    navigate("/onb"); // Redirect to home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Applications</h1>

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
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : " text-gray-600"
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
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            <FiSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* User Table */}
      {/* User Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="overflow-y-auto" style={{ maxHeight: "600px" }}>
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
                  Phone
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
              {filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`transition hover:shadow-md ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium flex items-center space-x-3">
                    <span>{user.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 text-gray-500">{user.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Verified"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center space-x-4">
                      <button className="text-indigo-500 hover:text-indigo-600 transition">
                        <FiEdit className="text-xl" />
                      </button>
                      <button className="text-red-500 hover:text-red-600 transition">
                        <FiTrash className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-500 mt-6">No users found.</div>
        )}
      </div>

      {/* Add Applicant Button */}
    </div>
  );
};

export default AllApplications;
