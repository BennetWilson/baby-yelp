const User = require('./User');
const Review = require('./Review');
const Restaurant = require('./Restaurant');


User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});


Review.belongsTo(Restaurant,{
    foreignKey: 'restaurant_id'
});

Restaurant.hasMany(Review,{
  foreignKey: 'restaurant_id'
});

module.exports = {User, Review, Restaurant};