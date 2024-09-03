import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js"

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;


try {
    
    mongoose.connect(URI);
    console.log("Connected to MongoDB")

} catch (error) {
    console.log(error);
}


app.use("/user",UserRouter);

app.listen(PORT, ()=>{
    console.log(`port listening on ${PORT}`)
})