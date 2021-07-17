  
const colors = ["green", "red", "rgba(133,122,200)", "#f15025","#2c82c9", "#c92c60", "#c9c62c", "rgba(201, 141, 44, 1)" ];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}