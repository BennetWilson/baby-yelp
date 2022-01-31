const router = require("express").Router();
const { Restaurant, Review, User } = require("../models");

// Maybe redirect to restaurants and reviews.
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll({
      attributes: ["id", "restaurant_name", "description", "created_at"],
      include: [
        {
          model: Review,
          attributes: ["id", "title", "text", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
       
      ],
    });
    const restaurants = restaurantData.map((post) => post.get({ plain: true }));

    res.render("login", {
      restaurants,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", async (req, res) => {
  // try{
  res.render('dashboard');
  //  } catch(err) {
  //      res.status(500).json(err);
  //  }
})


module.exports = router;
