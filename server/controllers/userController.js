/*
 * pageName.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is provides loading capabilities and a splash page while the
 * page content is loading.
 * ------------
 */
//Add user model
const UserController = require('../models/User');

//Create Endpoints
const getUsers = async (req, res, next) =>{
  try {
    const results = await User.find();

    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
  } catch (error) {
    throw new Error(`Error getting all users: ${error.message}`)
    next(error);
  }
}

//Create a user
const createUser = async (req, res, next) =>{
  try {
    const user = new user(req.body);
    const results = await user.create(req.body);

    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
  }
  catch (error) {
    throw new Error(`Error creating user: ${error.message}`)
    next(error);
  }
}

/*
const createUser = async (req, res, next) =>{
  try {
    const user = new User(req.body);
    const results = await user.save();

    res
      .status(201)
      .setHeader('Content-Type', 'application/json')
  }
  catch (error) {
    throw new Error(`Error creating user: ${error.message}`)
    next(error);
  }
}
const deleteUser = async (req, res, next) =>{
  try {
    const user = new User(req.body);
    const results = await user.save();

    res
      .status(201)
      .setHeader('Content-Type', 'application/json')
  }
  catch (error) {
    throw new Error(`Error creating user: ${error.message}`)
    next(error);
  }
}*/
module.exports(
  getUsers,
  createUser,
)