const express = require("express");
const blogStatistics = require("./controllers/blogStatistics");
const blogSearchData = require("./controllers/blogSearchData");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the SubSpace Assignment");
});

app.get("/api/blog-stats", blogStatistics);

app.get("/api/blog-search", blogSearchData);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
