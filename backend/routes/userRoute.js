import { Router } from "express";
import { changePassword, deleteUserAccount, getUsers, loginUser, logoutUser, myAccount, registerUser, updateUser, verifyUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/auth.js";



const router =Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)

router.use(authenticate)
router.route("/logout").post(logoutUser)
router.route("/account").get(myAccount)
router.route("/change-password").post(changePassword)
router.route("/all").get(getUsers)



router.route("/delete/:userId").delete(deleteUserAccount);
router.route("/verify/:userId").put(verifyUser);
router.route("/update/:userId").put(updateUser);


export default router;