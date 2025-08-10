require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const sequelize = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");

const authRoutes = require("./routes/auth.routes");
const lawyerRoutes = require("./routes/lawyer.routes");
const clientRoutes = require("./routes/client.routes");
const reviewRoutes = require("./routes/review.routes");
const publicRoutes = require("./routes/public.routes");

const app = express();

// Middlewares
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

// Routes
app.use("/working", (req, res) => {
  res.send("Server is working");
});
app.use("/api/auth", authRoutes);
app.use("/api/lawyer", lawyerRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/public", publicRoutes);

// Central Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
