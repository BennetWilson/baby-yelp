const { Model, DataTypes } = require("sequelize");
const sequelize = require("..config/connection.js");

// Create a new model for reviews
class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
<<<<<<< Updated upstream
=======
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "restaurant",
        key: "id",
      },
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
>>>>>>> Stashed changes
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
