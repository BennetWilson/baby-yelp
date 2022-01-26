const router = require('express').Router();
const { Restaurant } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
        const restaurantData = await Restaurant.findAll({
            include: [User],
        });
        const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

        res.render('homepage', {
            restaurants,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login')
});

router.get('signup', (req, res) => {
    res.render('signup');
});

router.get('/restaurant/:id', async (req, res) => {
    try{
        const restaurantData = await Restaurant.findByPk({
            where: {
                id: req.params.id,
            },
            include: [
                User,
                {
                    model: Review,
                    icnlude: [User]
                }
            ]
        });
        if(restaurantData) {
            const restaurant = restaurantData.get({ plain: true});
            res.render('single-review', {restaurant, logged_in: req.session.logged_in});
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;