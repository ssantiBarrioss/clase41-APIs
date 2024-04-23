const express = require('express');
const router = express.Router();
const genresControllerApi = require('../../controllers/api/genresControllerApi');

router.get('/api/genres', genresControllerApi.list);
router.get('/api/genres/detail/:id', genresControllerApi.detail);


module.exports = router;