const express = require("express");
const mongoose = require("mongoose");
const ruleRoutes = require("./routes/ruleRoutes");
const path = require("path");

const app = express();
app.use(express.json()); // For parsing application/json

// Connect to MongoDB (replace with your actual connection string)
mongoose
  .connect("mongodb://localhost:27017/yourDatabaseName", {
    // Update your database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Use the ruleRoutes
app.use("/api/rules", ruleRoutes);

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Basic route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
