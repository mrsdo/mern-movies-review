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


dotenv.config({
  path: './config/config.env',
})

//Connect to DB
mongoose.set('strictQuery', true);
connectDB();



//Initialize Express App
const app = express();

//Create a port. Read it from env or default
const PORT = process.env.PORT || 5001;

app.use(logger);

app.use(bodyParser);

//Initialize server to run
const server = app.listen(PORT,  () => {
  console.log(`Server running on port ${PORT}`);
})

//Create handler for errors
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
})