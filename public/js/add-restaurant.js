async function newRestaurantFormHandler(event) {
    event.preventDefault();
  
    // const text = document.querySelector('input[name="title"]').value.trim();
  
    
    // const restaurant_id = location.pathname.split("/")[3];
    const restaurant_name = document.querySelector("#title").value.trim();
    const description = document.querySelector("#text").value.trim();
    console.log(restaurant_name);
    console.log(description)
    if (restaurant_name && description) {
      const response = await fetch("/api/restaurants", {
        method: "POST",
        body: JSON.stringify({
          restaurant_name,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
        document.querySelector("#restaurant-form").style.display = "block";
      }
    }
  }
  
  document
    .querySelector(".restaurant-form")
    .addEventListener("submit", newRestaurantFormHandler);