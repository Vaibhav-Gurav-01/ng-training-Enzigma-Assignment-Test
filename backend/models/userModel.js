import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema= new Schema({

    name:{
        type:String,
        required: true,
    },

    username:{
        type:String,
        unique:true,
        required: true,
    },


    email: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
    },

    password:{
        type:String,
        required:[true,"password is required"]
    },

    role:{
        type: String,
        enum:[ "User" , "Admin", "HR"],
        default:"User"
    },

    refreshToken:{
        type:String
    },

    isVerified:{
        type: Boolean,
        default: false
    }
})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
          process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


// userSchema.methods.generateAccessToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
//             email: this.email,
//             username: this.username
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn:process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }


export const User = mongoose.model("User", userSchema)