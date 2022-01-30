const restaurantId = location.pathname.split("/")[3];
const deleteResClickHandler = async () => {
    await fetch(`/api/restaurants/${restaurantId}`, {
      method: 'DELETE'
    });

    document.location.reload();
  };
  if (response.ok) {
    document.location.replace('/api/restaurants');
  } else {
    alert(response.statusText);
  }

  
  document
    .querySelector('#delete-res')
    .addEventListener('click', deleteResClickHandler);