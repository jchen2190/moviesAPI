// npm init -y
// npm install express morgan axios ejs uuid

// npm install nodemon
// "start": "nodemon index.js" in script in package.json
// nodemon index.js

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

// middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "css")));

// middleware for JSON testing
app.use(express.urlencoded({ extended: false })); // reads form data
app.use(express.json()); // send JSON out from the server
app.use(logger("dev")); // colorizes status codes in terminal

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})