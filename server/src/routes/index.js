const { Router } = require("express");
const getCountries = require('../controllers/getCountries.js');
const postCountries = require("../controllers/postCountries.js");

const router = Router();

router.get('/countries', getCountries);
router.post('/countries', postCountries);

module.exports = router;