const editFormHandler = async (event) => {
    event.preventDefault();
    const review_id = location.pathname.split("/")[3];
    const title = document.querySelector('input[name="review-title"]').value;
    const text = document.querySelector('textarea[name="review-body"]').value;
  
    console.log(title);
    console.log(text);
  // alert(title+text)
    const response = await fetch(`/api/reviews/${review_id}`, {
      method: 'PUT',
      body: JSON.stringify({
       title,
        text,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    console.log(response);
    if (response.ok) {
      location.replace(document.referrer);
    } else {
      alert('Failed to update your post');
    }
  }
  document
    .querySelector('#review-form')
    .addEventListener('submit', editFormHandler);