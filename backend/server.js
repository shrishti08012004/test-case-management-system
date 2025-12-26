const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB, sequelize } = require("./src/config/db");
require("./src/models/User");

const authRoutes = require("./src/routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync();
    console.log("✅ Database synced");

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
  }
};

startServer();
