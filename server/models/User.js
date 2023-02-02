/*
 * pageName.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * ------------
 */

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  UserName: {
    type: String,
    unique: true,
    required: true,
    maxLength: 20
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: [
      'Male',
      'Female',
    ]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
  },
  },{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);