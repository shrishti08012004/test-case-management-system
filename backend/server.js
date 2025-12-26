const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB, sequelize } = require("./src/config/db");
require("./src/models/User");

const authRoutes = require("./src/routes/auth.routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.send("Test Case Management API is running 🚀");
});

// routes
app.use("/api/auth", authRoutes);

// start server
const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed:", error);
  }
};

startServer();
