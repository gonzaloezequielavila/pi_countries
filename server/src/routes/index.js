const { Router } = require("express");
const getCountries = require('../controllers/getCountries.js');
const getCountriesById = require('../controllers/getCountriesById.js');
const postCountries = require("../controllers/postCountries.js");
const getCountriesByName = require("../controllers/getCountriesByName.js");

const router = Router();
router.post('/countries', postCountries);

router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesById);
router.get('/country/name', getCountriesByName);
// If I use /countries/name it doesn't work, I wrote it in singular and for some reason it works now



module.exports = router;