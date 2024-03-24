const { Router } = require("express");

//!Countries
const getCountries = require('../controllers/Country/getCountries.js');
const getCountriesById = require('../controllers/Country/getCountriesById.js');
const postCountries = require("../controllers/Country/postCountries.js");
const getCountriesByName = require("../controllers/Country/getCountriesByName.js");

//!Activities
const postActivities = require("../controllers/Activity/postActivities.js");
const getActivities = require("../controllers/Activity/getActivities.js");
const deleteActivity = require("../controllers/Activity/deleteActivity.js");

const router = Router();

//!Countries
router.post('/countries', postCountries);
router.get('/countries', getCountries);
router.get('/countries/:id', getCountriesById);
router.get('/country/name', getCountriesByName);
// If I use /countries/name it doesn't work, I wrote it in singular and for some reason it works now

//!Activities
router.post('/activities', postActivities);
router.get('/activities', getActivities);
router.delete('/activities/:id', deleteActivity);


module.exports = router;