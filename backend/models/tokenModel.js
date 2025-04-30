import mongoose, { Schema } from "mongoose";

const tokenSchema = new Schema(
  {
    token: {
      type: Number,
      required: true,
      unique: true, 
    },

    email: {
      type: String,
      required: false, 
      match: [/\S+@\S+\.\S+/, "Invalid email address"], 
    },

    isUsed: {
      type: Boolean,
      default: false, 
    },

    processCompleted:{
        type:Boolean,
        default:false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
  },
);


export const Token = mongoose.model("Token", tokenSchema);
