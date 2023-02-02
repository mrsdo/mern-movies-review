const mongoose = require('mongoose');

/**
 * Get Models
 */

const db = require('../models');
const Role = db.role;

mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    // mongodb connection
    const con = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongodb connected');
    initial();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// createNew Roles
// TODO: Revamp this as a seed or tasks function to include admin user with password reset.
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'tenant',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'tenant' to roles collection");
      });

      new Role({
        name: 'agent',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'agent' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

module.exports = connectDB;