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

  //get id from params
  const id = Number(req.params.id);

  //sql queries
  const sql = `SELECT * FROM movies WHERE movies.id = ?`;
  const sqlReviews = `SELECT * FROM reviews WHERE reviews.movie_id = ?`;

  //perform sql query
  connection.query(sql, [id], (err, results) => {
    //handle errors
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "No movies founded!" });

    //get the result and save it in a variable
    const movie = results[0];

    //perform second query to get the movie reviews
    connection.query(sqlReviews, [id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      //return the results
      movie.reviews = results;
      res.json(movie);
    });
  });

}

//exports module
module.exports = { index, show };