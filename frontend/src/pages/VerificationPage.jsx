// import React, { useState, useEffect } from "react";
// import { FaLock } from "react-icons/fa"; // Lock icon from react-icons
// import { useNavigate } from "react-router-dom"; // To handle redirects

// const VerificationPage = () => {
//   const [isVerified, setIsVerified] = useState(false); // Example state for verification status
//   const navigate = useNavigate(); // Hook to navigate to other pages

//   // Simulate a check for user verification (this can come from API or Redux state)
//   useEffect(() => {
//     // Replace with actual verification check (e.g., from API or user state)
//     const userVerified = false; // Example: user not verified
//     setIsVerified(userVerified);
//   }, []);

//   const handleGoHome = () => {
//     // Redirect to the home page
//     navigate("/"); // Go to home or dashboard page
//   };

//   return (
//     <div className="min-h-screen  flex flex-col justify-center items-center">
//       {/* Full-page Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//         <div className="text-center text-white">
//           <FaLock className="text-6xl mb-6" /> {/* Lock Icon */}
//           <h2 className="text-3xl font-semibold mb-4">Account Not Verified</h2>
//           <p className="text-lg mb-6">Your account is not verified. You will get the access to the portal once tou are verified</p>
//           <div className="space-x-4">
//             {/* Action buttons */}

//             <button
//               onClick={handleGoHome}
//               className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition"
//             >
//               Log out
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* This is the main content section, and it is blurred */}

//       <div className="w-full h-full flex flex-col justify-center items-center  blur-md">
//         {/* Content that will be blurred */}
//         <h1 className="text-2xl font-bold text-gray-800">
//           Main Content (Locked)
//         </h1>
//         <p className="mt-2 text-lg text-gray-600">
//           This content is locked because your account is not verified.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VerificationPage;

import React, { useState, useEffect } from "react";
import { FaLock } from "react-icons/fa"; // Lock icon from react-icons
import { useNavigate } from "react-router-dom"; // To handle redirects

const VerificationPage = () => {
  const [isVerified, setIsVerified] = useState(false); // Example state for verification status
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Simulate a check for user verification (this can come from API or Redux state)
  useEffect(() => {
    // Replace with actual verification check (e.g., from API or user state)
    const userVerified = false; // Example: user not verified
    setIsVerified(userVerified);
  }, []);

  const handleGoHome = () => {
    // Redirect to the home page
    navigate("/"); // Go to home or dashboard page
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      {/* Full-page Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="text-center text-white max-w-lg w-full px-6 py-8 bg-opacity-90 rounded-lg  space-y-6">
          {/* Lock Icon with animation */}
          <h2 className="text-3xl font-semibold mb-4">Account Not Verified</h2>
          <p className="text-lg mb-6">
            Your account is not verified. You will get access to the portal once
            you are verified.
          </p>
          <button
            onClick={handleGoHome}
            className="w-full px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition duration-200"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content (Blurred) */}

      {/* Blurring Effect */}
      <div className="absolute inset-0 bg-white opacity-60 blur-md"></div>
    </div>
  );
};

export default VerificationPage;
