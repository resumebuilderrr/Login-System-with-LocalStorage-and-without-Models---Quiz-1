import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./Routes/auth.js";
import { authMiddleware } from "./middlewares.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

//protected route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "This is protected data",
    userId: req.user.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
