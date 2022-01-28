const router = require("express").Router();
const { Restaurant, Review, User } = require("../models");

// Maybe redirect to restaurants and reviews.
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  // try {
    // Get all projects and JOIN with user data
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
      // logged_in: req.session.logged_in,
    });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("dashboard");
//     return;
//   }
//   res.render("login");
// });



router.get("/restaurant/:id", withAuth, async (req, res) => {
  const restaurantData = await Restaurant.findByPk({
    where: {
      id: req.params.id,
    },
    include: [
      User,
      {
        model: Review,
        include: [User],
      },
    ],
  });
  if (req.res.logged_in) {
    res.redirect("./api/review-routes");
    return;
  }
  res.render("reviews");
});

module.exports = router;
