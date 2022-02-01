document.getElementById("pickme");
document.getElementsByClassName("myul");
document.getElementsByTagName("li");
document.querySelectorAll(".myul");

let myheader = document.querySelector("h1");
console.log(myheader);
myheader.style.color = "red";

// random color changing

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// runs func every second
setInterval(() => (myheader.style.color = getRandomColor()), 1000);
