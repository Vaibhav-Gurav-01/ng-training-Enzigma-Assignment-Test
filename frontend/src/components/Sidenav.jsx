// import React from "react";
// import { NavLink } from "react-router-dom";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";

// const sidebar = [
//   {
//     name: "Dashboard",
//     link: "/dashboard",
//     icon: <HomeOutlinedIcon className="mr-3" />,
//   },
//   {
//     name: "Applications",
//     link: "/applications",
//     icon: <SettingsOutlinedIcon className="mr-3" />,
//   },

//   {
//     name: "Users",
//     link: "/users",
//     icon: <SettingsOutlinedIcon className="mr-3" />,
//   },

//   {
//     name: "Onboard Applicant",
//     link: "/onb",
//     icon: <SettingsOutlinedIcon className="mr-3" />,
//   },

//   {
//     name: "Token",
//     link: "/hr",
//     icon: <SettingsOutlinedIcon className="mr-3" />,
//   },

//   {
//     name: "Logout",
//     onclick: handleLogout(),
//     link: "/",
//     icon: <ExitToAppIcon className="mr-3" />,
//   },
// ];

// const Sidenav = () => {
//   return (
//     <div className="flex flex-col rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 w-1/5 m-2">
//       <div className="text-2xl font-bold text-center mb-5 mt-5 text-white">
//         ENZIGMA
//       </div>
//       <div className="flex flex-col space-y-4">
//         {sidebar.map((item, index) => (
//           <NavLink
//             key={index}
//             to={item.link}
//             className={({ isActive }) =>
//               isActive
//                 ? "flex items-center p-4 text-lg font-semibold bg-slate-50 text-black shadow-inner"
//                 : "flex items-center p-4 text-lg font-medium text-white hover:bg-slate-600 hover:text-white transition-colors duration-300"
//             }
//           >
//             {item.icon}
//             {item.name}
//           </NavLink>
//         ))}

//         <div
//           onClick={handleLogout}
//           className="flex items-center p-4 text-lg font-medium text-white hover:bg-slate-600 hover:text-white transition-colors duration-300 cursor-pointer"
//         >
//           <ExitToAppIcon className="mr-3" />
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidenav;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import showToast from "./toastNotification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sidebar = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <HomeOutlinedIcon className="mr-3" />,
  },
  {
    name: "Applications",
    link: "/applications",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },
  {
    name: "Users",
    link: "/users",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },
  {
    name: "Onboard Applicant",
    link: "/onb",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },
  {
    name: "Token",
    link: "/hr",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },
];

const Sidenav = () => {
  const navigate = useNavigate();

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
    <div className="flex flex-col rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 w-1/5 m-2">
      <div className="text-2xl font-bold text-center mb-5 mt-5 text-white">
        ENZIGMA
      </div>
      <div className="flex flex-col space-y-4">
        {sidebar.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "flex items-center p-4 text-lg font-semibold bg-slate-50 text-black shadow-inner"
                : "flex items-center p-4 text-lg font-medium text-white hover:bg-slate-600 hover:text-white transition-colors duration-300"
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

        {/* Logout Button */}
        <div
          onClick={handleLogout}
          className="flex items-center p-4 text-lg font-medium text-white hover:bg-slate-600 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <ExitToAppIcon className="mr-3" />
          Logout
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sidenav;
