const signupBtn = document.getElementById("signupBtn");
const signupForm = document.getElementById("signupForm");

// signupBtn.addEventListener("click", () => {
//   const data = validatePassword(signupForm.password.value);
//   console.log(data);
// });
const validatePassword = (newPassword) => {
  const passwordCriteria = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
  const test = passwordCriteria.test(newPassword);
  console.log(test);
  return test;
};
document
  .getElementById("password")
  .setAttribute(
    "title",
    "Password must be at least 8 characters with a number with an upper and lowercase letter"
  );
document
  .getElementById("password")
  .setAttribute("title", "Passwords must match");
document.getElementById("email").setAttribute("title", "Must be a valid email");

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

  if (!validatePassword(newUser.password)) {
    alert(
      "Password must be at least 8 characters with a number with an upper and lowercase letter"
    );
  } else {
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
  }
});
