const router = require("express").Router();
// const { Restaurant, Review, User } = require("../models");
// const withAuth = require("../utils/auth");

// Maybe redirect to restaurants and reviews.
router.get('/restaurant', (req, res) => {
    if (req.res.logged_in) {
        res.redirect('./api/restaurant-routes');
        return;
    }
    res.render('restaurant'); 
});

router.get('/reviews', (req, res) => {
    if(req.res.logged_in) {
        res.redirect('./api/review-routes');
        return;
    }
    res.render('reviews');
})

module.exports = router;
