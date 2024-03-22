const axios = require('axios');
const {Country, Activity} = require('../db');

const URL = 'http://localhost:3001/countries';

const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        return res.status(200).json(countries)
    } catch (error) {
        // Handle errors
        res.status(500).json(error);
    }
};

module.exports = getCountries;