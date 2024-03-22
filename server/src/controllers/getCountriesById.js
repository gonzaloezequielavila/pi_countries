const {Country} = require('../db');

const getCountriesById = async (req, res) => {
    try {
        const id = req.params.id
        const countries = await Country.findByPk(id);
        if(countries){
          return res.status(200).json(countries)
        }
        return res.status(400).send('Country not found')
    } catch (error) {
        // Handle errors
        res.status(500).json({error: error.message});
    }
};

module.exports = getCountriesById;