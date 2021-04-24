const signupBtn = document.getElementById("signupBtn");
const signupForm = document.getElementById("signupForm");

// signupBtn.addEventListener("click", () => {
//   const data = signupForm;
//   console.log();
// });

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const { email, password, confirmPassword } = this.elements;
  //   console.log(this.elements);
  //   console.log(email, password, confirmPassword);
  //   console.log(email.value, password.value, confirmPassword.value);
  const newUser = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(newUser);
  newUser.password !== confirmPassword.value
    ? alert("passwords don't match")
    : fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.replace("/members");
        })
        .catch((err) => console.log(err));
});
