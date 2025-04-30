// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleAdminLogin = () => {
//     navigate("/login");
//   };

//   const handleTokenLogin = () => {
//     navigate("/token");
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen flex items-center justify-center">
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative z-10 text-center max-w-2xl px-6">
//         <h1 className="text-4xl md:text-6xl font-bold mb-10 text-shadow-xl">
//           Welcome to Enzigma Onboarding Platform
//         </h1>
//         <div className="space-y-4">
//           <div className="space-x-4">
//             <button
//               onClick={handleAdminLogin}
//               className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-75"
//             >
//               Admin/HR Login
//             </button>
//             <button
//               onClick={handleTokenLogin}
//               className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-xl transform transition-all hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
//             >
//               Login with Token
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleAdminLogin = () => {
//     navigate("/login");
//   };

//   const handleTokenLogin = () => {
//     navigate("/token");
//   };

//   return (
//     <div className="relative bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-800 text-white min-h-screen flex items-center justify-center">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black opacity-40"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-3xl px-6">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-shadow-lg">
//           Welcome to Enzigma Onboarding Platform
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl mb-10">
//           Streamline your onboarding process with our platform.
//         </p>

//         {/* Buttons */}
//         <div className="space-y-4">
//           <div className="space-x-4">
//             <button
//               onClick={handleAdminLogin}
//               className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-75"
//             >
//               Admin/HR Login
//             </button>
//             <button
//               onClick={handleTokenLogin}
//               className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
//             >
//               Login with Token
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/login");
  };

  const handleTokenLogin = () => {
    navigate("/token");
  };

  return (
    <div className="relative bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-800 text-white min-h-screen flex items-center justify-center">
      <Navbar />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-shadow-lg">
          Welcome to Enzigma Onboarding Platform
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10">
          Streamline the onboarding process with Enzigma.
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <div className="space-x-4">
            <button
              onClick={handleAdminLogin}
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-75"
            >
              Admin/HR Login
            </button>
            <button
              onClick={handleTokenLogin}
              className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
            >
              Login with Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
