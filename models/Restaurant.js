const { Model, DataTypes } = require("sequelize");
const sequelize = require("..config/connection.js");

class Restaurant extends Model {}

Restaurant.init( 
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
            user_id: {
              type: DataTypes.INTEGER,
              references: {
                model: "user",
                key: "id",
              },
            },
            
            description: {
              type: DataTypes.TEXT,
              allowNull: true,
            },  
        
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'Restaurant',
          }
        );
        
        module.exports = Restaurant;

