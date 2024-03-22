const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set (value){
        this.setDataValue('name', value.toLowerCase());
      },
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: 'No posee capital',
      allowNull: false,
    }, 
    subregion: {
      type: DataTypes.STRING,
      defaultValue: `Doesn't have a subregion`,
    },
    area: {
      type: DataTypes.INTEGER,      
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {timestamps: false});
};