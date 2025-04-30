import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";
import { generateToken, getAllTokens } from "../controllers/tokenController.js";


const router =Router()

router.use(authenticate)

router.post('/generate', generateToken);
router.get('/all', getAllTokens);


export default router;
