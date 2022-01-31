// const res = require("express/lib/response");

const editClickHandler = async (event) => {
    event.preventDefault();
    const restaurant_id = location.pathname.split("/")[3];
    const restaurant_name = document.querySelector('#res-name').value;
    const description = document.querySelector('#res-description').value;
    
  // alert(title+text)
    const response = await fetch(`/api/restaurants/${restaurant_id}`, {
      method: 'PUT',
      body: JSON.stringify({
       restaurant_name,
       description,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    if (response.ok) {
        res.render()
        location.reload();
    } else {
      alert('Failed to update this restaurant');
    }
  }
  document
    .querySelector('#updateRes')
    .addEventListener('click', editClickHandler);