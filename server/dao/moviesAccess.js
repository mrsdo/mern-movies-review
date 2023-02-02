/*
 * moviesAccess.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file allows application access to movie database.  It will also find all movies
 * based on filter query and assign it to a cursor.
 * On error, return empty moviesList and totalNumMovies to be 0.

Lim, Greg. Beginning MERN Stack: Build and Deploy a Full Stack MongoDB, Express, React, Node.js App (p. 36). Kindle Edition.
 * ------------
 */



import { static } from 'express';

let movies //Store to database

export default class MoviesAccess {
  static async injectDB(connectDB){ // Called right after DB movies reference
    if (movies){
      return
    }
    // If reference already exists, return
    try {
      movies = await connectDB(process.env.MONGO_NS).collection('movie')
    }
    // Else, connect to database + collection or send an error
    catch (err){
      console.error(`Unable to connect in MoviesAccess:${err.message}`)
    }
  }

  static async getMovies({// default filter. Accepts filter object as first argument
    filters = null,  // query variable is empty until filter specified.
    page = 0,
    moviesPerPage = 20, // will only get 20 movies at once
  } = {}){
    let query
    if(filters){
      if("title" in filters){ // check if title hasOwnProperty
        query = { $text: { $search: filters['title']}} //
      }else if("rated" in filters){
        query = { "rated": { $eq: filters['rated']}}
      }
      //TODO: add query for making sure movies have posters as default
    } let cursor
    try{
      cursor = await movies
      .find(query)
        .limit(moviesPerPage)
        .skip(moviesPerPage * page)
      const moviesList = await cursor.toArray()
      const totalNumMovies = await movies.countDocuments(query)
      return {moviesList, totalNumMovies}
    }
    catch(e){
      console.error(`Unable to issue find command, ${e}`)
      return { moviesList: [], totalNumMovies: 0}  // On e return empty moviesList
    }
  }

}