<<<<<<< Updated upstream
=======
const router = require('express').Router();
const { Restaurant, User, Review } = require('../models/');
const withAuth = require('../utils/auth');

// Review Find All
router.get("/", async (req, res) => {
    try{
    const reviewData = await Review.findAll({
      include: [User],
    });
    const reviews = reviewData.map((review) => review.get({ plain: true }));
  
    res.json(reviews);
     } catch(err) {
         res.status(500).json(err);
     }
  });
  
// Review Find One
  router.get("/:id", async (req, res) => {
    try {
      console.log(req.params.id)
      const reviewData = await Review.findByPk(req.params.id, {
        include: [
          {
            model: User,
          },
          {
            model: Restaurant,
          },
        ],
      });
      const reviews = reviewData.get({ plain: true });
      res.render('singleReview', reviews);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('edit/:id',withAuth, async (req, res) => {
    // try {
        
        const restaurantData = await Restaurant.findByPk(req.params.id,
            {
                where: {
                    restaurant_id: req.body.restaurant_id,
                },
            }
        );
        const serializedData = restaurantData.get({ plain: true});
        res.render('edit-restaurant', serializedData);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

  module.exports = router;
>>>>>>> Stashed changes
