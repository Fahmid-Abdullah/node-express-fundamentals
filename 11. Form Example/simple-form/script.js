const form = document.getElementById('loginForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      responseMessage.style.color = 'green';
      responseMessage.textContent = 'Login successful!';
      // Redirect or further actions here
    } else {
      responseMessage.style.color = 'red';
      responseMessage.textContent = data.error || 'Login failed.';
    }
  } catch (error) {
    responseMessage.style.color = 'red';
    responseMessage.textContent = 'An error occurred. Please try again.';
    console.error('Error:', error);
  }
});
