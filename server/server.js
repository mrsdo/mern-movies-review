/*
 * server.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides central file.
 * ------------
 */

//Import Packages
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const logger = require('./utils/logger');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


dotenv.config({
  path: './config/config.env',
})

//Connect to DB
mongoose.set('strictQuery', true);
connectDB();



//Initialize Express App
const app = express();

//Create a port. Read it from env or default
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Establish /public folder path
 */
app.use(express.static(path.join(__dirname, 'pages')));

/**
 * Create Routes
 */

const indexRouter = require('./routes/index');
app.use('/', indexRouter);
app.get("/", (req, res) => {
  res.json({ message: "This is the express server loaded default with json." });
});

//Initialize server to run
const server = app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`);
})

//Create handler for errors
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
})