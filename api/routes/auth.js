const express = require("express");
const router = express.Router();

// POST request to /auth/login
router.post("/login", (req, res) => {
  // Handle login logic here
  res.send("Login route");
});

// POST request to /auth/register
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      username,
      password, // In a real application, you would hash the password before saving it
      email
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;
