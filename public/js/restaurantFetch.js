const res = require("express/lib/response");

const restaurantPageHandler = async (event) => {
    event.preventDefault();

    const restaurant_name = req.body.restaurant_name;
    const description = req.body.description;

    const response = await fetch('/api/restaurants/', {
        method: 'GET',
        body: JSON.stringify({ restaurant_name, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        res.json(response);
    };

    // if (leaveReviewBtn === true) {
    //     document.location.replace('/api/reviews');
    // } else {
    //     alert('Failed to login');
    // };
};

document
    .querySelector('#restaurants')
    .addEventListener('submit', restaurantPageHandler);