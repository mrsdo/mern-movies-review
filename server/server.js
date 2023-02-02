/*
 * server.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides central file.
 * ------------
 */

//Import Packages
var express = require('express');
var dotenv = require('dotenv');
var connectDB = require('./config/db');
var logger = require("morgan");
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require("cookie-parser");
var cors = require("cors");


//Connect to DB
dotenv.config({
  path: './config/config.env',
})

connectDB();

/**
 *
 * @type {Router | {}}
 */
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// APIs
var moviesRouter = require("./api/movies.route");

//Initialize Express App
var app = express();

//Create a port. Read it from env or default
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "pages")));

app.use(cors());


/**
 * Create Routes
 */

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/movies", moviesRouter);


//Initialize server to run
 const server = app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`);
})



//Create handler for errors
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
})