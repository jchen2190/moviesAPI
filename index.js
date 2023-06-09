// npm init -y
// npm install express morgan axios ejs uuid
// npm install nodemon
// add "start": "nodemon index.js" in script in package.json
// npm run start

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})