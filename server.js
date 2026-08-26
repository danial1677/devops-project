const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Health check endpoint
app.get("/api/health", (req, res) => {
    res.json({
        status: "UP",
        application: "DevOps Status Dashboard",
        version: "1.0.0"
    });
});

// Application information
app.get("/api/info", (req, res) => {
    res.json({
        environment: process.env.NODE_ENV || "development",
        platform: process.platform,
        nodeVersion: process.version
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`);
});