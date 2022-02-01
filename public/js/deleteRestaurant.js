const restaurantId = location.pathname.split("/")[3];
console.log(restaurantId);
console.log(location);
const deleteResClickHandler = async () => {
    await fetch(`/api/restaurants/${restaurantId}`, {
      method: 'DELETE'
    });
    location.replace('/api/restaurants');
  };
  document
    .querySelector('#deleteRes')
    .addEventListener('click', deleteResClickHandler);