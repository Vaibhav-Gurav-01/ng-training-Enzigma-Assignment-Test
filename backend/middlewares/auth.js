import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {apiError} from "../utils/apiError.js"


const authenticate= async(req,res,next)=>{
    try {
        const {refreshToken} =req.cookies

        if(!refreshToken){

            return next(new apiError(401, "Log in to access"));
            //refreshAccessToken()
        }

        const decodeToken=  jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET)
        if(!decodeToken){
            return next(new apiError(400,"Invalid access token"))
        }

        const user=await User.findById(decodeToken?._id).select("-password -refreshToken")
        if(!user){
            return next(new apiError("Invalid access token"))
        }

        req.user=user
        next()
    } catch (error) {
        next (new apiError(500,"Internal server error whle authenticating"))
    }
}


export {authenticate}