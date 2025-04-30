import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField, IconButton } from "@mui/material";

const TokenLogin = () => {
  const [token, setToken] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function handlelogin() {
    navigate("/onb");
  }

  // Handle input changes
  const handleInputChange = (index, value) => {
    if (isNaN(value)) return; // Allow only numbers
    const newToken = [...token];
    newToken[index] = value;
    setToken(newToken);

    if (value !== "" && index < 4) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullToken = token.join("");

    // Simulate token verification
    try {
      const response = await fetch("/api/token-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: fullToken }),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/temp");
      } else {
        alert("Invalid or expired token. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="  rounded-lg p-8 w-full max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <IconButton
            className="bg-white hover:bg-gray-100 "
            onClick={handleClick}
          >
            <ArrowBackIcon />
          </IconButton>
          <a href="/help" className="text-gray-600 hover:text-gray-900">
            Need help?
          </a>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          Token Login
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Enter the 5-digit token you received to continue.
        </p>

        {/* Token Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-4">
            {token.map((value, index) => (
              <input
                key={index}
                id={`input-${index}`}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-14 h-14 text-center text-2xl border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-sm"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handlelogin}
            className="w-full py-3 bg-gray-900 text-white font-semibold text-lg rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-75"
          >
            Verify Token
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Didn't receive a token?{" "}
            <a
              href="/help"
              className="text-blue-500 hover:underline transition duration-300"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TokenLogin;
