//express, router and controller imports
const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

//index route
router.get('/', moviesController.index);

//show route
router.get('/:id', moviesController.show);

//router exports
module.exports = router;