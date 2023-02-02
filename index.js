/*
 * index.js | MDolce, React Native Portfolio, marti.dolce@29signals.org
 * Function ---
 * This file is creates an express server
 * ------------
 */

const http = require("http");

const server = http.createServer((req, res) =>{
  console.log(req.url)
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Twenty9signals is running at root. This page is running Node.js version: ");
  res.end('Hello Node.js')
})
server.listen(9000)