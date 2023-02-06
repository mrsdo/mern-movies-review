/*
 * ds.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides database connection.
 * ------------
 */

//Connect to the database with Mongoose
const mongoose = require('mongoose');

//Create Async function to connect to the database
/**
 * TODO: Connection String: Update this connection string
 *
 */

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    // mongodb connection
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log('MongoDB Connection failed',err);
    connectDB.json(err);
    process.exit(1);
    await connectDB.close(true)
  }
};

module.exports = connectDB;