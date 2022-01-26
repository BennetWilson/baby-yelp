const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to login');
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', loginFormHandler);