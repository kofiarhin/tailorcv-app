const express = require("express");
const cors = require("cors");
const app = express();
const cvRoutes = require("./routes/cvRoutes");

// setup middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.json({ message: "welcome to tailer made" });
});

app.get("/api/users", (req, res) => {
  return res.json([
    { name: "kofi arhin", email: "kofiarhin@gmai.com" },
    { name: "lebron james", email: "lebron@gmail.com" },
  ]);
});

app.use("/api/generate", cvRoutes);

module.exports = app;
