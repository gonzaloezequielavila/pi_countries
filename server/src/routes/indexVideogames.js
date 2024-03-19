const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames')
const postVideogame = require('../controllers/postVideogame')
const postGenre = require('../controllers/postGenre')
const getGenres = require('../controllers/getGenres')
const getVideogameById = require('../controllers/getVideogameById')
const getVideogamesByName = require('../controllers/getVideogamesByName')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/videogames', getVideogames);
router.get(`/videogames/:id`, getVideogameById);
router.get('/videogame/name', getVideogamesByName); 
// If I use /videogames/name it doesn't work, I erased the s at the end of videogames and now it works. For some reason. 
router.post(`/videogames`, postVideogame);
router.post(`/genres`, postGenre)
router.get(`/genres`, getGenres);


module.exports = router;
