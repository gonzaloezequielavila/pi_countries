const { Country } = require('../db');
const { countries } = require('../../api/db.json');

const URL = "https://restcountries.com/v3/all"

async function postCountries(req, res, next) {
    try {  
              
        for (const countryData of countries) {
            const {
                cca3,
                name,
                flags,
                region,
                capital,
                subregion,
                area,
                population
            } = countryData;
            // Insert the country into the database
            await Country.create({
                id: cca3,
                name: name.common.toLowerCase(),
                flag: flags.png,
                continent: region,
                capital: capital ? capital.toString() : 'No posee capital',
                subregion: subregion || "Doesn't have a subregion",
                area: Math.round(area), // Round area to the nearest integer
                population: population,
            });
        }

        res.status(201).json({ message: 'Countries inserted successfully' });
    } catch (error) {
        next(error);
    }
}

module.exports = postCountries;