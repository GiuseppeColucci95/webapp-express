//express imports
const express = require('express');
const app = express();
const cors = require('cors');
//router import
const moviesRouter = require('./routers/moviesRouter');
//import connection
const connection = require('./database/db');
//middlewares import
const notFoundError = require('./middlewares/notFoundError');
const serverError = require('./middlewares/serverError');
//variables
const PORT = process.env.PORT || 3000;

//cors middleware
app.use(cors({ origin: process.env.FRONT_URL }));
//body parser middleware
app.use(express.json());
//static assets middleware
app.use(express.static('public'));

//home route
app.get('/', (req, res) => {
  res.send("Welcome to our Server!");
});

//router middleware
app.use('/api/v1/movies', moviesRouter);

//server start listening
app.listen(PORT, () => {
  console.log(`Server start listening on http://localhost:${PORT}`);
});

//server error middleware
app.use(serverError);

//not found error middleware
app.use(notFoundError);
