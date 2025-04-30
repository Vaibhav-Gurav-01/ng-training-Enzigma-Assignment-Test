import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import {apiError} from "./utils/apiError.js"

const app=express()

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    }

app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser())


import userRouter from "./routes/userRoute.js"
import tokenRouter from "./routes/tokenRoute.js"
import detailRouter from "./routes/detailRoute.js"

app.use("/api/v1/user", userRouter)
app.use("/api/v1/token", tokenRouter)
app.use("/api/v1/detail", detailRouter)

app.use((err, req, res, next) => {
    if (err instanceof apiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }

    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

export {app}