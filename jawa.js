function submitForm(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform validation or login process here
  // For demonstration, let's simulate a successful login
  // Replace this with actual authentication logic
  // For instance, you might call an API to verify credentials
  setTimeout(() => {
    // Simulating a successful login
    // Redirect to another page after successful login
    window.location.href = "portopollio.html"; // Change 'welcome.html' to your desired destination
  }, 1000);
}
