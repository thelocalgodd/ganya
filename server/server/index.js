const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ganya";

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({
    message: "ganya!",
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "ganya api!",
  });
});

app.get("/live", express.static("../dist"));

const authRouter = require("../routes/auth");
const userRouter = require("../routes/user");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/transaction", require("../routes/transaction"));
// app.use("/api/v1/category", require("../routes/category"));
// app.use("/api/v1/chart", require("../routes/chart"));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
