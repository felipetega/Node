const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config(); // This line loads environment variables


const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("Connected to MongoDB");
})
.catch(err => {
  console.error("Error connecting to MongoDB", err);
});

app.use(express.json()); // Use built-in middleware for parsing JSON

const userRoute = require("./routes/user");
app.use("/api/users", userRoute)

const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute)



app.listen(3000, () => {
  console.log(`Running server`);
});
