const newPostHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    console.log(title, body);

    if (title && body) {
        const response = await fetch('/api/blogPost', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json'},
        });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    }
};

document
    .querySelector('#post')
    .addEventListener('click', newPostHandler);