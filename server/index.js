const express = require("express");
const app = express();
var path = require("path");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const blogs = require("./routes/api/blogs");
const { connectDB } = require("./connectDB");
const port = process.env.PORT || 3000;

// connect to database
connectDB();

// express configurations
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("build")); // register the static file directory

// app routers
app.use("/api/blogs", blogs);

app.get("/about", (req, res) => {
  res.end(
    "APP Version " + require(path.join(__dirname, "..", "package.json")).version
  );
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
