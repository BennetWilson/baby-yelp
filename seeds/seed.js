const sequelize = require("../config/connection");
const seedUsers = require("./user-seed.json");
const seedRestaurants = require("./restaurant-seed.json");
const seedReviews = require("./review-seed.json");
const { User, Restaurant, Review } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });
  const restaurants = await Restaurant.bulkCreate(seedRestaurants);
  const reviews = await Review.bulkCreate(seedReviews);
  process.exit(0);
};

seedAll();
