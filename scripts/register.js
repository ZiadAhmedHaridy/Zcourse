document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const regUsername = document.getElementById("UserName").value;
    const regPassword = document.getElementById("password").value;

    const userData = {
      username: regUsername,
      password: regPassword,
    };


  });
