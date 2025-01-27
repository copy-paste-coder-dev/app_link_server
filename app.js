// const express = require("express");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve the .well-known directory
// app.use("/.well-known", express.static(path.join(__dirname, ".well-known")));

// // Root route for testing
// app.get("/", (req, res) => {
//   res.send("Welcome to the Android App Links Server!");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
//app.js

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("App is running..");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);