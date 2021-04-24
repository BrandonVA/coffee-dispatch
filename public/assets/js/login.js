const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");

// loginBtn.addEventListener("click", () => {
//   const data = loginForm;
//   console.log();
// });

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const { email, password } = this.elements;
  //   console.log(this.elements);
  //   console.log(email, password, confirmPassword);
  //   console.log(email.value, password.value, confirmPassword.value);
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
