const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.post('/api/movies', moviesController.create);
router.delete('/api/delete/:id', moviesController.destroy);


module.exports = router;