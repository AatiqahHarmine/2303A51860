require("dotenv").config();

const express = require("express");
const Log = require("./middleware/logger");

const scheduleRoutes = require("./vehicle-scheduler-be/routes/scheduleRoutes");

const app = express();

app.use(express.json());

app.use("/api", scheduleRoutes);

app.get("/test", async (req, res) => {
  await Log(
    "backend",
    "info",
    "service",
    "test log sent successfully"
  );

  res.json({
    message: "Log Sent"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});