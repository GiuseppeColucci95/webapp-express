//express imports
const express = require('express');
const app = express();
const cors = require('cors');

//import connection
const connection = require('./database/db');

//variables
const PORT = process.env.PORT || 3000;

//home route
app.get('/', (req, res) => {
  res.send("Welcome to our Server!");
});

//index route
app.get('/movies', (req, res) => {
  res.send("Index route!");
});

//show route
app.get('/movies/:id', (req, res) => {
  res.send(`Show route for id: ${req.params.id}`);
});

//server start listening
app.listen(PORT, () => {
  console.log(`Server start listening on http://localhost:${PORT}`);
});
