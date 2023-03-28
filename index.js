// npm init -y
// npm install express morgan axios ejs uuid
// npm install nodemon
// "start": "nodemon index.js" in script in package.json
// nodemon index.js

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "css")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})