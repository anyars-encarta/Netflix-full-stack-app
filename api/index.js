import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(
    () => console.log('DB Connection successful')
).catch((e) => console.log(e));

app.listen(5000, () => {
    console.log('You are re-building Netflix and your server is running!')
});