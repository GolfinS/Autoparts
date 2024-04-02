import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://GolfinS:0895541141aA@cluster0.ir0fdo2.mongodb.net/parts-del').then(()=>console.log("DB Connected"))
}

//'process.env.MONGO_URL'