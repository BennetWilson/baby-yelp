async function reviewFormHandler(event) {
  event.preventDefault();

  // const text = document.querySelector('input[name="title"]').value.trim();

  
  const restaurantId = location.pathname.split("/")[2];
  const reviewTitle = document.querySelector("#title").value.trim();
  const reviewText = document.querySelector("#text").value.trim();
  console.log(reviewTitle, reviewText);
  if (reviewTitle && reviewText) {
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        restaurant_id,
        reviewTitle,
        restaurantId,
        reviewText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
      document.querySelector("#review-form").style.display = "block";
    }
  }
}

document
  .querySelector(".review-form")
  .addEventListener("submit", reviewFormHandler);
