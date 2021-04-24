const logoEl = document.getElementById("logo");
const getDataBtn = document.getElementById("getData");

logoEl.addEventListener("click", () => {
  alert("Hello World");
});

if (getDataBtn !== null) {
  getDataBtn.addEventListener("click", () => {
    fetch("/api/getData")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}
