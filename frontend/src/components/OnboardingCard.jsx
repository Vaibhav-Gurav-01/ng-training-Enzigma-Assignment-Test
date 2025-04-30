// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { HiDocumentText, HiPencilAlt } from "react-icons/hi";

// const OnboardingCard = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const navigate = useNavigate();

//   // Handle redirection to the onboarding form
//   const handleStartOnboarding = (option) => {
//     if (option === "upload" && pdfFile) {
//       console.log("PDF uploaded:", pdfFile);
//       navigate("/onboarding-form"); // Redirect to onboarding form
//     } else if (option === "manual") {
//       navigate("/onb/details"); // Redirect to manual onboarding form
//     }
//   };

//   // Handle file change (PDF upload)
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setPdfFile(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
//         {/* Title Section */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-extrabold text-gray-800">
//             Start Your Onboarding
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Select an option below to proceed with the onboarding process.
//           </p>
//         </div>

//         {/* Options Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {/* Option 1: Upload PDF */}
//           <div className="flex flex-col items-center space-y-4 bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <HiDocumentText className="text-4xl text-indigo-600" />
//             <label
//               htmlFor="pdf-upload"
//               className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md cursor-pointer hover:bg-indigo-700 transition"
//             >
//               Upload PDF
//             </label>
//             <input
//               type="file"
//               id="pdf-upload"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </div>

//           {/* Option 2: Fill Details Manually */}
//           <div className="flex flex-col items-center space-y-4 bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <HiPencilAlt className="text-4xl text-green-600" />
//             <button
//               onClick={() => handleStartOnboarding("manual")}
//               className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
//             >
//               Fill Details Manually
//             </button>
//           </div>
//         </div>

//         {/* Action Button Section */}
//         <div className="flex justify-center items-center">
//           <button
//             onClick={() => handleStartOnboarding("upload")}
//             disabled={!pdfFile}
//             className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition w-full md:w-auto ${
//               !pdfFile ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             Continue with PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingCard;

//
//

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiDocumentText, HiPencilAlt } from "react-icons/hi";

const OnboardingCard = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  // Handle redirection to the onboarding form
  const handleStartOnboarding = (option) => {
    if (option === "upload" && pdfFile) {
      console.log("PDF uploaded:", pdfFile);
      navigate("/onboarding-form"); // Redirect to onboarding form
    } else if (option === "manual") {
      navigate("/onb/details"); // Redirect to manual onboarding form
    }
  };

  // Handle file change (PDF upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className=" bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Start Onboarding
      </h1>

      <p className="text-gray-600 mt-2">
        Select an option below to proceed with the onboarding process.
      </p>
      <div className=" rounded-lg p-8 w-full max-w-lg">
        {/* Title Section */}

        {/* Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Option 1: Upload PDF */}
          <div className="flex flex-col items-center space-y-4 bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <HiDocumentText className="text-5xl text-indigo-600" />
            <label
              htmlFor="pdf-upload"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-indigo-700 transition"
            >
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf-upload"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Option 2: Fill Details Manually */}
          <div className="flex flex-col items-center space-y-4 bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <HiPencilAlt className="text-5xl text-green-600" />
            <button
              onClick={() => handleStartOnboarding("manual")}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Fill Details Manually
            </button>
          </div>
        </div>

        {/* Action Button Section */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleStartOnboarding("upload")}
            disabled={!pdfFile}
            className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out w-full md:w-auto ${
              !pdfFile ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Continue with PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;

//
//

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { HiDocumentText, HiPencilAlt } from "react-icons/hi";

// const OnboardingCard = () => {
//   const [pdfFile, setPdfFile] = useState(null);
//   const navigate = useNavigate();

//   // Handle redirection to the onboarding form
//   const handleStartOnboarding = (option) => {
//     if (option === "upload" && pdfFile) {
//       console.log("PDF uploaded:", pdfFile);
//       navigate("/onboarding-form"); // Redirect to onboarding form
//     } else if (option === "manual") {
//       navigate("/onb/details"); // Redirect to manual onboarding form
//     }
//   };

//   // Handle file change (PDF upload)
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setPdfFile(file);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-blue-100  flex items-center justify-center p-6">
//       <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl">
//         {/* Title Section */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-extrabold text-gray-800">
//             Start Onboarding
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Select an option below to proceed with the onboarding process.
//           </p>
//         </div>

//         {/* Options Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {/* Option 1: Upload PDF */}
//           <div className="flex flex-col items-center space-y-4 bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
//             <HiDocumentText className="text-5xl text-indigo-600" />
//             <label
//               htmlFor="pdf-upload"
//               className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-indigo-700 transition"
//             >
//               Upload PDF
//             </label>
//             <input
//               type="file"
//               id="pdf-upload"
//               accept="application/pdf"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//           </div>

//           {/* Option 2: Fill Details Manually */}
//           <div className="flex flex-col items-center space-y-4 bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
//             <HiPencilAlt className="text-5xl text-green-600" />
//             <button
//               onClick={() => handleStartOnboarding("manual")}
//               className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
//             >
//               Fill Details Manually
//             </button>
//           </div>
//         </div>

//         {/* Action Button Section */}
//         <div className="flex justify-center items-center">
//           <button
//             onClick={() => handleStartOnboarding("upload")}
//             disabled={!pdfFile}
//             className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out w-full md:w-auto ${
//               !pdfFile ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             Continue with PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingCard;
