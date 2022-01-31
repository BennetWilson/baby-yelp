const restaurantId = location.pathname.split("/")[3];
console.log(location);
const deleteResClickHandler = async () => {
    await fetch(`/dashboard/api/${restaurantId}`, {
      method: 'DELETE'
    });
    location.replace('/api/restaurants');
  };
  document
    .querySelector('#deleteres')
    .addEventListener('click', deleteResClickHandler);