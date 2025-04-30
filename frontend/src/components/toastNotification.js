import { toast } from "react-toastify";

/**
 * Displays a toast notification.
 * 
 * @param {string} message - The message to display in the toast.
 * @param {string} type - The type of the toast (success, error, info, warning).
 * @param {number} autoClose - Duration in milliseconds to auto-close the toast (default: 3000).
 */
const showToast = (message, type = "info", autoClose = 3000) => {
  const config = {
    position: "top-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case "success":
      toast.success(message, config);
      break;
    case "error":
      toast.error(message, config);
      break;
    case "info":
      toast.info(message, config);
      break;
    case "warning":
      toast.warning(message, config);
      break;
    default:
      toast(message, config);
      break;
  }
};

export default showToast;
