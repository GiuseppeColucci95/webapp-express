//import db connection
const connection = require('../database/db');

//index route
function index(req, res) {

  //sql query
  const sql = `SELECT * FROM movies`;

  //perform sql query
  connection.query(sql, (err, results) => {
    //handle errors
    if (err) return res.status(500).json({ error: err.message });

    //return results
    res.send(results);
  });
}

//show route
function show(req, res) {
  res.send(`Show route for id: ${req.params.id}`);
}

//exports module
module.exports = { index, show };