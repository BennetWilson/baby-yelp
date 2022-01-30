
const reviewId = location.pathname.split("/")[3];
const deleteClickHandler = async () => {
    await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
    });

    document.location.reload();
  };
  
  
  document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);