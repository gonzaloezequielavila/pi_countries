const {Country} = require('../db');

const getCountriesById = async (req, res) => {
    try {
        const id = req.params.id
        const countries = await Country.findByPk(id);
        return res.status(200).json(countries)
    } catch (error) {
        // Handle errors
        res.status(400).json({error: error.message});
    }
};

module.exports = getCountriesById;