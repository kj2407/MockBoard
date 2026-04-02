import express from "express";
import cors from "cors";
import interviewRoutes from "./routes/interview.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/interview", interviewRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));