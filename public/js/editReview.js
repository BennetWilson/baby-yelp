
const reviewId = location.pathname.split("/")[3];

// const restaurant_id = 

const deleteClickHandler = async () => {
    await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
    });

    // document.location.replace(`/api/restaurants/${restaurant_id}`);
    location.replace(document.referrer);
    // document

  };
  document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);

 