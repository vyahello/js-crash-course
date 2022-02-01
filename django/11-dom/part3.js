let headOne = document.querySelector("#one");
let headTwo = document.querySelector("#two");
let headThree = document.querySelector("#three");

headOne.addEventListener("mouseover", function () {
  headOne.textContent = "Mouse Currently Over";
  headOne.style.color = "red";
});

headOne.addEventListener("mouseout", function () {
  headOne.textContent = "Hover Over Me!";
  headOne.style.color = "black";
});

headTwo.addEventListener("click", function () {
  headTwo.textContent = "Clicked on!";
  headTwo.style.color = "blue";
});

headThree.addEventListener("dblclick", function () {
  headThree.textContent = "I was double clicked";
  headThree.style.color = "red";
});
