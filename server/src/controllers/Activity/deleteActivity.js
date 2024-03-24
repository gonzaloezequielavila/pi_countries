const {Activity} = require('../../db');

const deleteActivity = async(req, res) => {
  const {id} = req.params;
  try{
    if (id){
      // const deleted = Activity.findOne({
      //   where:{
      //     id:id
      //   }
      // });
      await Activity.destroy({
        where:{
          id:id
        }
      });
      res.status(200).json({message: `Activity deleted`})
    }


  } catch(error){
    res.status(500).json({error: error.message})
  }
};

module.exports = deleteActivity;