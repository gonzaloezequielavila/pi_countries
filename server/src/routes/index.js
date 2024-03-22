const { Router } = require("express");
const getCountries = require('../controllers/getCountries.js');
const getCountriesById = require('../controllers/getCountriesById.js');
const postCountries = require("../controllers/postCountries.js");

const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesById);
router.post('/countries', postCountries);

module.exports = router;