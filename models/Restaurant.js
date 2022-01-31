const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    review_stars: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },

  //   review_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references:{
  //     model:"Review",
  //     key:'id',
  //   }
  // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "restaurant",
  }
);

module.exports = Restaurant;
