//express imports
const express = require('express');
const app = express();
const cors = require('cors');

//router import
const moviesRouter = require('./routers/moviesRouter');

//import connection
const connection = require('./database/db');

//variables
const PORT = process.env.PORT || 3000;

//home route
app.get('/', (req, res) => {
  res.send("Welcome to our Server!");
});

//router middleware
app.use('/movies', moviesRouter);

//server start listening
app.listen(PORT, () => {
  console.log(`Server start listening on http://localhost:${PORT}`);
});
