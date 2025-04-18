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

//movie review post route
function storeReview(req, res) {

  //variables to use
  const id = Number(req.params.id);
  const { name, vote, review } = req.body;
  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const updated_at = created_at;
  const values = [id, name, vote, review, created_at, updated_at];

  //sql query to do
  const sql = `INSERT INTO reviews (movie_id, name, vote, text, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`;

  //perform sql quert
  connection.query(sql, values, (err, results) => {
    //handle error
    if (err) return res.status(500).json({ error: err.message });

    //return success
    res.status(201).json({ message: "Review insert correctly!", reviewId: results.insertId });
  });
}

//exports module
module.exports = { index, show, storeReview };