const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");
const movieRoute = require("./routes/movies.js");
const listRoute = require("./routes/lists.js")

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(
    () => console.log('DB Connection successful')
).catch((e) => console.log(e));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log('You are re-building Netflix and your server is running!')
});
