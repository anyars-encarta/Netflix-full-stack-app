import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import authRoute from "./routes/auth.js";

const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(
    () => console.log('DB Connection successful')
).catch((e) => console.log(e));

// app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", authRoute);

app.listen(5000, () => {
    console.log('You are re-building Netflix and your server is running!')
});