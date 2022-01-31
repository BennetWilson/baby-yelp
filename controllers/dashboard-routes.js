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

  router.get('/edit/:id', async (req, res) => {
    // try {
        
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
        console.log(restaurantData);
        const serializedData = restaurantData.get({ plain: true});
        console.log(serializedData);
        res.render('edit-restaurant', serializedData);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.put('/:id', async (req, res) => {
  try {
      const updatedRestaurant = await Restaurant.update(
          {
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
  } catch (err) {
      res.status(500).json(err);
  }
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
});

  module.exports = router;