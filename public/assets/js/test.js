const mainEl = document.getElementById("main");
const logo = document.getElementById("logo");
const link = document.querySelector(".link");
const btnTest = document.getElementById("btn-test");

link.addEventListener("click", () => {
  const world = document.createElement("div");
  world.textContent = "world";
  mainEl.append(world);
});

logo.addEventListener("click", () => {
  const hello = document.createElement("div");
  hello.textContent = "Hello";
  mainEl.append(hello);
});
btnTest.addEventListener("click", () => {
  alert("Hello world");
});

const cube = (num) => {
  return num * 3;
};
const cube3 = cube(3);
console.log(cube3);
