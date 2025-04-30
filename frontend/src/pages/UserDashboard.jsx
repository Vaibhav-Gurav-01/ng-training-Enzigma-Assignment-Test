// import React, { useState } from "react";
// import {
//   FiSearch,
//   FiEdit,
//   FiTrash,
//   FiUserPlus,
//   FiCopy,
//   FiEye,
// } from "react-icons/fi";

// const UserDashboard = () => {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@example.com",
//       role: "Admin",
//       status: "Verified",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane.smith@example.com",
//       role: "Editor",
//       status: "Not Verified",
//     },
//     {
//       id: 3,
//       name: "Bob Johnson",
//       email: "bob.johnson@example.com",
//       role: "Viewer",
//       status: "Not Verified",
//     },
//     {
//       id: 3,
//       name: "Bob Johnson",
//       email: "bob.johnson@example.com",
//       role: "Viewer",
//       status: "Not Verified",
//     },
//     {
//       id: 4,
//       name: "Alice Brown",
//       email: "alice.brown@example.com",
//       role: "Admin",
//       status: "Not Verified",
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const verifiedUsers = users.filter((user) => user.status === "Verified");
//   const notVerifiedUsers = users.filter(
//     (user) => user.status === "Not Verified"
//   );

//   const [tokens, setTokens] = useState([
//     { id: 1, token: "12345-ABCDE", status: "Unused" },
//     { id: 2, token: "67890-FGHIJ", status: "Unused" },
//     { id: 3, token: "11223-KLMNO", status: "Used" },
//     { id: 4, token: "44556-PQRST", status: "Unused" },
//   ]);

//   const unusedTokens = tokens.filter((token) => token.status === "Unused");

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
//       {/* Header */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {/* New Applications Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             New Applications
//           </h2>
//           <p className="text-gray-500 mb-4">Applications not verified yet.</p>
//           <div>
//             {notVerifiedUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-2"
//               >
//                 <div>
//                   <h3 className="font-medium text-gray-700">{user.name}</h3>
//                   <p className="text-sm text-gray-500">{user.email}</p>
//                 </div>
//                 <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center ml-28">
//                   <FiEye className="mr-1" /> View
//                 </button>
//                 <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
//                   Verify
//                 </button>
//               </div>
//             ))}
//             {notVerifiedUsers.length === 0 && (
//               <p className="text-center text-gray-500">No new applications.</p>
//             )}
//           </div>
//         </div>

//         {/* Verified Applications Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Verified Applications
//           </h2>
//           <p className="text-gray-500 mb-4">Applications already verified.</p>
//           <div>
//             {verifiedUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-2"
//               >
//                 <div>
//                   <h3 className="font-medium text-gray-700">{user.name}</h3>
//                   <p className="text-sm text-gray-500">{user.email}</p>
//                 </div>
//                 <span className="text-green-600 font-medium text-sm">
//                   Verified
//                 </span>
//               </div>
//             ))}
//             {verifiedUsers.length === 0 && (
//               <p className="text-center text-gray-500">
//                 No verified applications.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Unused Tokens
//           </h2>
//           <p className="text-gray-500 mb-4">
//             Tokens generated but not used yet.
//           </p>
//           <div>
//             {unusedTokens.map((token) => (
//               <div
//                 key={token.id}
//                 className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-2"
//               >
//                 <span className="text-gray-700 font-medium text-sm">
//                   {token.token}
//                 </span>
//                 <div className="flex space-x-4">
//                   <button
//                     className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center"
//                     onClick={() => navigator.clipboard.writeText(token.token)}
//                   >
//                     <FiCopy className="mr-1" /> Copy
//                   </button>
//                   <button
//                     className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center"
//                     onClick={() =>
//                       setTokens(tokens.filter((t) => t.id !== token.id))
//                     }
//                   >
//                     <FiTrash className="mr-1" /> Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             {unusedTokens.length === 0 && (
//               <p className="text-center text-gray-500">No unused tokens.</p>
//             )}
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Overview</h2>
//           <div className="divide-y divide-gray-200">
//             {/* Admin */}
//             <div className="flex justify-between items-center py-3">
//               <h3 className=" font-medium text-gray-700">Admin</h3>
//               <span className=" font-bold ">4</span>
//             </div>

//             {/* Verified HR */}
//             <div className="flex justify-between items-center py-3">
//               <h3 className=" font-medium text-gray-700">Verified HR</h3>
//               <span className=" font-bold ">6</span>
//             </div>

//             {/* Unverified HR */}
//             <div className="flex justify-between items-center py-3">
//               <h3 className=" font-medium text-gray-700">Unverified HR</h3>
//               <span className=" font-bold ">3</span>
//             </div>

//             <div className="flex justify-between items-center py-3">
//               <h3 className=" font-medium text-gray-700">Applications</h3>
//               <span className=" font-bold ">4</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="bg-indigo-600 text-white px-6 py-2 flex items-center space-x-2 rounded-lg hover:bg-indigo-700 transition mt-6">
//         <FiUserPlus className="text-xl" />
//         <span>Onboard Applicant</span>
//       </button>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useState } from "react";
import {
  FiSearch,
  FiEdit,
  FiTrash,
  FiUserPlus,
  FiCopy,
  FiEye,
} from "react-icons/fi";

const UserDashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Verified",
    },
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Verified",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
      status: "Not Verified",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      role: "Viewer",
      status: "Not Verified",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      role: "Admin",
      status: "Not Verified",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const verifiedUsers = users.filter((user) => user.status === "Verified");
  const notVerifiedUsers = users.filter(
    (user) => user.status === "Not Verified"
  );

  const [tokens, setTokens] = useState([
    { id: 1, token: "12345-ABCDE", status: "Unused" },
    { id: 2, token: "67890-FGHIJ", status: "Unused" },
    { id: 3, token: "11223-KLMNO", status: "Used" },
    { id: 4, token: "44556-PQRST", status: "Unused" },
    { id: 4, token: "44556-PQRST", status: "Unused" },

    { id: 4, token: "44556-PQRST", status: "Unused" },
  ]);

  const unusedTokens = tokens.filter((token) => token.status === "Unused");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* New Applications Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            New Applications
          </h2>
          <p className="text-gray-500 mb-4">Applications not verified yet.</p>
          <div>
            {notVerifiedUsers.slice(0, 3).map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center  p-4 rounded-lg mb-2"
              >
                <div>
                  <h3 className="font-medium text-gray-700">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center ml-28">
                  <FiEye className="mr-1" /> View
                </button>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                  Verify
                </button>
              </div>
            ))}
            {notVerifiedUsers.length > 3 && (
              <p className="text-center text-gray-500">
                {notVerifiedUsers.length - 3} more applications...
              </p>
            )}
            {notVerifiedUsers.length === 0 && (
              <p className="text-center text-gray-500">No new applications.</p>
            )}
          </div>
        </div>

        {/* Verified Applications Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Verified Applications
          </h2>
          <p className="text-gray-500 mb-4">Applications already verified.</p>
          <div>
            {verifiedUsers.slice(0, 3).map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center  p-4 rounded-lg mb-2"
              >
                <div>
                  <h3 className="font-medium text-gray-700">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <span className="text-green-600 font-medium text-sm">
                  Verified
                </span>
              </div>
            ))}
            {verifiedUsers.length > 3 && (
              <p className="text-center text-gray-500">
                {verifiedUsers.length - 3} more verified applications...
              </p>
            )}
            {verifiedUsers.length === 0 && (
              <p className="text-center text-gray-500">
                No verified applications.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Unused Tokens Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Unused Tokens
          </h2>
          <p className="text-gray-500 mb-4">
            Tokens generated but not used yet.
          </p>
          <div>
            {unusedTokens.slice(0, 3).map((token) => (
              <div
                key={token.id}
                className="flex justify-between items-center p-4 rounded-lg mb-2"
              >
                <span className="text-gray-700 font-medium text-sm">
                  {token.token}
                </span>
                <div className="flex space-x-4">
                  <button
                    className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center"
                    onClick={() => navigator.clipboard.writeText(token.token)}
                  >
                    <FiCopy className="mr-1" /> Copy
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center"
                    onClick={() =>
                      setTokens(tokens.filter((t) => t.id !== token.id))
                    }
                  >
                    <FiTrash className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))}
            {unusedTokens.length > 3 && (
              <p className="text-center text-gray-500">
                {unusedTokens.length - 3} more unused tokens...
              </p>
            )}
            {unusedTokens.length === 0 && (
              <p className="text-center text-gray-500">No unused tokens.</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Overview</h2>
          <div className="divide-y divide-gray-200">
            {/* Admin */}
            <div className="flex justify-between items-center py-3">
              <h3 className=" font-medium text-gray-700">Admin</h3>
              <span className=" font-bold ">4</span>
            </div>
            {/* Verified HR */}
            <div className="flex justify-between items-center py-3">
              <h3 className=" font-medium text-gray-700">Verified HR</h3>
              <span className=" font-bold ">6</span>
            </div>
            {/* Unverified HR */}
            <div className="flex justify-between items-center py-3">
              <h3 className=" font-medium text-gray-700">Unverified HR</h3>
              <span className=" font-bold ">3</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <h3 className=" font-medium text-gray-700">Applications</h3>
              <span className=" font-bold ">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
