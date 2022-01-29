async function reviewFormHandler(event) {
  event.preventDefault();

  // const text = document.querySelector('input[name="title"]').value.trim();

  
  const restaurant_id = location.pathname.split("/")[3];
  const title = document.querySelector("#title").value.trim();
  const text = document.querySelector("#text").value.trim();
  console.log(text, title);
  if (title && text) {
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        restaurant_id,
        title,
        text,
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
