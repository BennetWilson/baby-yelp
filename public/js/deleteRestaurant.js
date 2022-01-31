
const restaurantId = location.pathname.split("/")[3];
const deleteResClickHandler = async () => {
   const response = await fetch(`/api/restaurants/${restaurantId}`, {
      method: 'DELETE'
    });

    document.location.reload();
  };
  if (response.ok) {
    location.replace(document.referrer);
  } else {
    alert(response.statusText);
  }

  
  document
    .querySelector('#delete-res')
    .addEventListener('submit', deleteResClickHandler);