const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB, sequelize } = require("./src/config/db");
require("./src/models/User");

const authRoutes = require("./src/routes/auth.routes");

const app = express();

// ✅ Middleware FIRST
app.use(cors());
app.use(express.json());

// ✅ Root route (VERY IMPORTANT for Railway)
app.get("/", (req, res) => {
  res.send("Test Case Management API is running 🚀");
});

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Server start
const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync();
    console.log("✅ Database synced");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
};

startServer();
