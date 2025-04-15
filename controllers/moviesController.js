//import db connection
const connection = require('../database/db');

//index route
function index(req, res) {
  res.send("Index route");
}

//show route
function show(req, res) {
  res.send(`Show route for id: ${req.params.id}`);
}

//exports module
module.exports = { index, show };