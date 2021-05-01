const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");
const passwordBtn = document.querySelectorAll(".btn-show-pass");

// loginBtn.addEventListener("click", () => {
//   const data = loginForm;
//   console.log();
// });
const showPassword = (e) => {
  e.preventDefault();
  const icon = e.target;
  if (icon.classList.contains("fa-eye-slash") === true) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    e.target.parentElement.previousElementSibling.previousElementSibling.type =
      "text";
  } else {
    icon.classList.remove("fa-eye");
    e.target.parentElement.previousElementSibling.previousElementSibling.type =
      "password";
    icon.classList.add("fa-eye-slash");
  }
};
passwordBtn.forEach((el) => {
  el.addEventListener("click", showPassword);
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const { email, password } = this.elements;
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.replace("/members");
    })
    .catch((err) => console.log(err));
});
