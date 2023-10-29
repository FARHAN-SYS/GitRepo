const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "farhan" && password === "222") {
    alert("Login successfull");
  } else {
    alert("Login failed");
  }
});
