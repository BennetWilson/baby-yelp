const { Review, User, Restaurant } = require("../models");

module.exports = async function (restaurant_id) {

  const reviewData = await Review.findAll(
    {
      where: { restaurant_id },
    }
  );

  const reviews = reviewData.map((review) => review.get({ plain: true }));
  const sum = reviews.reduce((total, item) => total + item.stars, 0)
  const review_stars = sum / reviews.length

  return Restaurant.update(
    { review_stars },
    {
        where: {
            id: restaurant_id,
        },
    }
  )

}
