const router = require('express').Router();
const { Restaurant, User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    // try {
        const restaurantData = await Restaurant.findAll(
            {
            include: [Review],
            }
        );

        const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
        // res.json(restaurants);
        // res.render('homepage', {
        //     restaurants,
        //     logged_in: req.session.logged_in,
        // });
        console.log(restaurants)
        res.render('restaurant', {restaurants});
    // } catch (err) {
    //     res.status(500).json(err);
    // }
    
});

router.get('/:id', async (req, res) => {
    try {
        const restaurantData = await Restaurant.findByPk(req.params.id,
            {
                include: [{ model: Review }],
            },
            {
                where: {
                    restaurant_id: req.body.restaurant_id,
                },
            }
        );
        if (!restaurantData) {
            // res.render('single-review', {restaurant, logged_in: req.session.logged_in});
            res.status(404).json({ message: 'No restaurant found with this id' });
            return;
        } 
        res.status(200).json(restaurantData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        res.status(200).json(newRestaurant);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // try {
        const updatedRestaurant = await Restaurant.update(
            {
                id: req.body.id,
                restaurant_name: req.body.restaurant_name,
                description: req.body.description,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
        if (!updatedRestaurant) {
            res.status(404).json({ message: 'No restaurant found with this id'});
            return;
        }
        res.status(200).json(updatedRestaurant);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedRestaurant = await Restaurant.destroy(
            {
                where: {
                    id: req.params.id
                }
            });
            if (!deletedRestaurant) {
                res.status(404).json({ message: 'No restaurant found with this id' });
                return;
            }
            res.status(200).json(deletedRestaurant);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
