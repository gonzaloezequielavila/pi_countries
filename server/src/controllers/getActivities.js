const {Activity} = require('../db');

const getActivities = async (req, res) => {
  try{
    const activities = await Activity.findAll()
    if(!activities){
      return res.status(400).json({message: 'No activities found!'})
    }
    return res.status(200).json(activities)
  }
  catch(error){
    res.status(500).json({error: error.message})
  }
};

module.exports = getActivities;