const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "blood bank",
  });
});

app.listen(PORT, (req, res) => {
  console.log(
    `server is running in ${process.env.DEV_MODE} mode & port ${process.env.PORT}`
      .bgBlue.white
  );
});
