const signupBtn = document.getElementById("signupBtn");
const signupForm = document.getElementById("signupForm");
const passwordBtn = document.querySelectorAll(".btn-show-pass");

// signupBtn.addEventListener("click", () => {
//   const data = validatePassword(signupForm.password.value);
//   console.log(data);
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

const validatePassword = (newPassword) => {
  const passwordCriteria = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
  const test = passwordCriteria.test(newPassword);
  console.log(test);
  return test;
};

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const { email, password, confirmPassword } = this.elements;
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

// Adding new tooltip msg
document
  .getElementById("password")
  .setAttribute(
    "title",
    "Password must be at least 8 characters with a number with an upper and lowercase letter"
  );
document
  .getElementById("confirmPassword")
  .setAttribute("title", "Passwords must match");
document.getElementById("email").setAttribute("title", "Must be a valid email");
