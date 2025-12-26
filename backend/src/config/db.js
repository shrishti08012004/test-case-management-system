const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "test_case_management", // database name
  "postgres",             // username
  "Shrishti@12345",       // password
  {
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL Connected Successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

module.exports = { sequelize, connectDB };
