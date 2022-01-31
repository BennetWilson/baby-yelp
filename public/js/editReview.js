
const reviewId = location.pathname.split("/")[2];

// const restaurant_id = 

const deleteClickHandler = async () => {
    await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
    });

    location.replace(document.referrer);

  };
  document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);

 