function getFormPayload (formID) {
  const formdata = new FormData(document.getElementById(formID));
  return Object.fromEntries(formdata);
}

async function reviewFormHandler(event) {
  event.preventDefault();

  // const text = document.querySelector('input[name="title"]').value.trim();

  // const formdata = new FormData(document.querySelector("#review-form"));
  // const payload = Object.fromEntries(formdata);
  const payload = getFormPayload("review-form");

  payload.restaurant_id = location.pathname.split("/")[3];

  // const restaurant_id = location.pathname.split("/")[3];
  // const title = document.querySelector("#title").value.trim();
  // const text = document.querySelector("#text").value.trim();

  console.log(payload);

  if (title && text) {
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify(payload),
      // body: JSON.stringify({
      //   restaurant_id,
      //   title,
      //   text,
      // }),
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

const ratingStars = [...document.querySelectorAll("#review-form .rating__star")];
console.log("ratingStars", ratingStars); 

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.forEach((star, index) => {
    star.onclick = () => {
      i = stars.indexOf(star);
      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
        document.getElementById('stars').value = index + 1;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
        document.getElementById('stars').value = index;
      }
    };
  });
}
executeRating(ratingStars);

document
  .querySelector(".review-form")
  .addEventListener("submit", reviewFormHandler);
