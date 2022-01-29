const router = require("express").Router();
const { Review, User, Restaurant } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  // try{
  const reviewData = await Review.findAll({
    include: [User],
  });
  const reviews = reviewData.map((review) => review.get({ plain: true }));

  res.json(reviews);
  //  } catch(err) {
  //      res.status(500).json(err);
  //  }
});

router.get("/:id", async (req, res) => {
  try {
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
    //  const reviews = reviewData.map((review) => review.get({ plain: true }));
    const reviews = reviewData.get({ plain: true });
    res.json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  // try {
  const newReview = await Review.create({
    ...body,
    user_id: req.session.user_id,
  });

  res.status(200).json(newReview);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
});
router.put("/:id", async (req, res) => {
  // try {
  const [affectedRows] = await Review.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (affectedRows > 0) {
    res.status(200).json(affectedRows);
  } else {
    res.status(404).end(err);
  }
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.delete("/:id", async (req, res) => {
  try {
    const reviewData = await Review.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: "No Review found with this id!" });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
