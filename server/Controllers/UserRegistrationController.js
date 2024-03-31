// controllers/userController.js
const userModel = require("../Models/UserRegistrationModel");

// Controller function to handle user registration
const userSave = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function to handle user login
const userLogin = async (req, res) => {
    try {
      const { email, password, registerAs } = req.body;
      const user = await userModel.findOne({ email });
  
      if (!user || user.password !== password) {
        res.status(401).json({ message: "Invalid credentials" });
      } else {
        // Check if user's registerAs matches the provided registerAs during login
        if (user.registerAs !== registerAs) {
          res.status(401).json({ message: "Unauthorized access" });
        } else {
          res.status(200).json({ message: "Login successful", user });
        }
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
// Export the controller functions
module.exports = {
  userSave,
  userLogin,
};
