import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from React Router v6

const ApplicationSubmitted = () => {
  const navigate = useNavigate();

  // Navigate to the dashboard or home page
  const navigateToDashboard = () => {
    navigate("/"); // Navigate to home page
  };

  // Prevent back navigation
  useEffect(() => {
    // Push a new state to prevent the back button from returning to the previous page
    window.history.pushState(null, "", window.location.href);

    // Event listener to detect back navigation
    const preventBack = (e) => {
      window.history.pushState(null, "", window.location.href); // Keep pushing the current state
      e.preventDefault(); // Prevent the default behavior of the back button
      navigate("/"); // Redirect the user to home page
    };

    // Listen for popstate event (back button pressed)
    window.addEventListener("popstate", preventBack);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("popstate", preventBack);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      {/* Main Content Wrapper with Background and Spacing */}
      <div className="w-full max-w-2xl text-center p-8">
        {/* Main Heading */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Onboarding Form Submitted Successfully!
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Thank you for applying. Your application is currently under review by
          our HR team. You will be notified once you are verified.
        </p>

        {/* Action Button */}
        <button
          onClick={navigateToDashboard}
          className="py-2 px-6 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
