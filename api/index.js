const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(
    () => console.log('DB Connection successful')
).catch((e) => console.log(e));

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(8800, () => {
    console.log('You are re-building Netflix and your server is running!')
});




// app.use(bodyParser.json());

