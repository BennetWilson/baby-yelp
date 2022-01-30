
const reviewId = location.pathname.split("/")[3];
const deleteClickHandler = async () => {
    await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
    });

    document.location.reload();
  };
  // WHY ONE BUTTON IS SUBMIT AND THE OTHER IS CLICK?
//   document
//     .querySelector('#review-form')
//     .addEventListener('submit', editFormHandler);
  document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);