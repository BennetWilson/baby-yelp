const editFormHandler = async (event) => {
    event.preventDefault();
    const restaurant_id = location.pathname.split("/")[3];
    const title = document.querySelector('input[name="post-title"]').value;
    const text = document.querySelector('textarea[name="post-body"]').value;
  
    console.log(title);
    console.log(text);
  
    const response = await fetch(`/api/review/${reviewId}`, {
      method: 'PUT',
      body: JSON.stringify({
       title,
       restaurant_id,
        text,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    console.log(response);
    if (response.ok) {
      document.location.replace(`/restaurants/${restaurant_id}`);
    } else {
      alert('Failed to update your post');
    }
    document.location.replace('/dashboard');
  }
  document
    .querySelector('#review-form')
    .addEventListener('submit', editFormHandler);