document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from actually submitting

  // Get the values entered by the user
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // You can add your authentication logic here, such as sending a request to a server

  // For this example, we'll just display an alert
  alert(`Username: ${username}\nPin: ${password}`);
});
