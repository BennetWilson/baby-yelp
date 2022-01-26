const { Model, Datatype } = require("sequelize");
const sequelize = require("..config/connection.js");

class restaurants extends Model {}

restaurants.init( 
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            restaurant_name: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            
            description: {
              type: DataTypes.TEXT,
              allowNull: true,
            },  
        
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'dish',
          }
        );
        
        module.exports = Restaurants;

