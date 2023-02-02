/*
 * ds.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides database connection.
 * ------------
 */

//Connect to the database with Mongoose
const mongoose = require('mongoose');

//Create Async function to connect to the database
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log(`MongoDB Connected: ${conn.connection.host}`)
};

module.exports = connectDB;