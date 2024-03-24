const { Country } = require('../../db');
const { Op } = require('sequelize');

const getCountriesByName = async (req, res) => {
  const {name} = req.query;
  console.log('Name recieved:', name)

  if (!name) return res.status(400).send('A value is needed')

    try {
      const countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        limit: 5
      });

      console.log('Countries found', countries);
      
      if(countries.length > 0){
        return res.status(200).json(countries);
      }else {
        res.status(400).send(`Country not found`)
      }
    } catch (error) {
        // Handle errors
        res.status(500).json({error: error.message});
    }
};

module.exports = getCountriesByName;