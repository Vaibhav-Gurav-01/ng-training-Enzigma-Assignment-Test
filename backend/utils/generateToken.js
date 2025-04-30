import { User } from "../models/userModel.js";
import { apiError } from "./apiError.js";


const generateTokens=async(userId)=>{
    try {
        const user= await User.findById(userId)
        const refreshToken= user.generateRefreshToken()

        user.refreshToken=refreshToken
        await user.save()

        return {refreshToken}


    } catch (error) {
         new apiError(500,"Internal server error")
    }
}

export {generateTokens}