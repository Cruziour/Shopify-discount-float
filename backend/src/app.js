import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["POST", "OPTIONS"],
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import announcementRouter from "./route/announcement.route.js";

app.use("/api/v1/announcement", announcementRouter);

// Global Error Handler Middleware
import errorHandler from "./middleware/error.middleware.js";
app.use(errorHandler);

export default app;
