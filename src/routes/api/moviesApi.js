const express = require('express');
const router = express.Router();
const moviesControllerApi = require('../../controllers/api/moviesControllerApi');


router.post('/api/movies/create', moviesControllerApi.create);
router.delete('/api/movies/delete/:id', moviesControllerApi.destroy);

module.exports = router;