const {Activity} = require('../db');

const postActivities = async (req, res) => {
  try{
    const {name, difficulty, duration, season} = req.body;

    if(!name || !difficulty || !duration || !season) {
      return res.status(400).json({message: 'Information missing!'});
    }
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season
    });

    return res.status(200).json({message: `${newActivity.name} has been succesfully created`})
  } catch (error){
    return res.status(500).json({error: error.message})
  }

};

module.exports = postActivities;