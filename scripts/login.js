document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "ziad" && password === "ziad") {
      window.location.href = "/pages/homePage.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
