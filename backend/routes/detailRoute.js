import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";
import { createDetail } from "../controllers/detailController.js";



const router =Router()

router.use(authenticate)

router.post('/create', createDetail);



export default router;
