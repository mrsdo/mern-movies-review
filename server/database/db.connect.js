/*
 * db.connect.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides:
 * confirm connection to database.
 * ------------
 */

/*
 * db.connect.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file imports db.config.js and manages MongoClient connection objects via (mongoDB_URI)
 * ------------
 */

const mongoose = require('mongoose');
const config = require('../database/db.config');

const url = config.mongoUrl;


/**
 * Code to open Mongoose connection to MongoDB database
 */

const connectDB = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

import { config } from 'dotenv';
import dbConfig from './db.config'


const connectDB = async () => {
/*   //Create new MongoClient

  const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      //Action after connection
    })
    .catch(err => {
      // Action if connect Fails
      console.error("Connection error", err.message);
      client.close();
    }) */
}


/**
 * const { MongoClient, ServerApiVersion } = require('mongodb');
 * const uri = "mongodb+srv://<username>:<password>@dev-mern-cluster.cy9xgcf.mongodb.net/?retryWrites=true&w=majority";
 * const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 * client.connect(err => {
 *   const collection = client.db("test").collection("devices");
 *   // perform actions on the collection object
 *   client.close();
 * });
 */