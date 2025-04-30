import mongoose from "mongoose";

export const database=async()=>{

    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DBNAME}`)

        console.log("Connection established successfully !!!")
    } catch (error) {
        
        console.log("db connection failed",error)
    }
}