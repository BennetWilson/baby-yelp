const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const reviewRoutes = require('./review-routes');
const restaurantRoutes = require('./restaurant-routes');
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/restaurants', restaurantRoutes);

module.exports = router;