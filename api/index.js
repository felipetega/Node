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

//AUTH
const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute)

//USER
const userRoute = require("./routes/user");
app.use("/api/users", userRoute)

//PRODUCT
const productRoute = require("./routes/product");
app.use("/api/products", productRoute);

//CART
const cartRoute = require("./routes/cart");
app.use("/api/carts", cartRoute);

//ORDER
const orderRoute = require("./routes/order");
app.use("/api/orders", orderRoute);

//STRIPE
// const stripeRoute = require("./routes/stripe");
// app.use("/api/checkout", stripeRoute);

app.listen(3000, () => {
  console.log(`Running server`);
});
