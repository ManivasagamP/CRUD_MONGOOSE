import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();

app.use("/api/crud",route)

const PORT = process.env.PORT;
mongoose
    .connect(process.env.MONGO_URL)
    .then(
        console.log("database connected")
    )
    .catch((error) => {
        console.log(error)
    });

app.listen(PORT,()=>{
    console.log("Server is running");
;})