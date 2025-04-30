import React from "react";
import { TextField, IconButton, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showToast from "../components/toastNotification";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [formData, setFormData] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        showToast(
          "Registration successful! Redirecting to login...",
          "success"
        );
        setTimeout(() => navigate("/login"), 1000); // Redirect to login after 3 seconds
      } else {
        showToast(result.message || "Registration failed!", "error");
      }
    } catch (error) {
      showToast("An error occurred. Please try again later.", "error");
      console.error("Network Error: ", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Right Section */}
      <div className="flex flex-1 justify-center items-center bg-white p-8 shadow-xl rounded-lg">
        <div className="w-full max-w-lg">
          <div className="flex justify-between items-center mb-6">
            <IconButton
              className="hover:bg-gray-100"
              onClick={handleNavigateHome}
            >
              <ArrowBackIcon />
            </IconButton>
            <a href="/help" className="text-gray-600 hover:text-gray-900">
              Need help?
            </a>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
              Create Your Account
            </h1>
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 font-semibold hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>

          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                variant="outlined"
                className="bg-gray-50"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <TextField
                fullWidth
                label="Username"
                name="username"
                variant="outlined"
                className="bg-gray-50"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                variant="outlined"
                className="bg-gray-50"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 relative">
              <TextField
                fullWidth
                label="Password"
                name="password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                className="bg-gray-50"
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleClickShowPassword}
                      className="focus:outline-none"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-900 text-white font-semibold text-lg rounded-md transition-transform transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-75"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="text-center text-gray-500 my-6 font-medium">OR</div>

          <div className="flex justify-center space-x-4">
            <IconButton className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full shadow">
              <GoogleIcon fontSize="large" />
            </IconButton>
            <IconButton className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full shadow">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Register;
