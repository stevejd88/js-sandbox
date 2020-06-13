const doors = document.querySelector(".doors");
const allDoors = document.querySelectorAll(".door");
const overlay = document.querySelector(".overlay");
const allOverlays = document.querySelectorAll(".overlay");

const found = new Audio("./sounds/take-a-picture.mp3");
const laugh = new Audio("./sounds/laugh.mp3");

const n = Math.floor(Math.random() * allDoors.length);
console.log(n);

allDoors[n].classList.add("random-peewee");

doors.addEventListener("click", function (e) {
  if (e.target.parentNode.classList[0] === "door") {
    e.target.classList.remove("overlay");
    e.target.classList.add("undisplay");
    if (e.target.parentNode.classList[1] === "random-peewee") {
      e.target.classList.remove("overlay");
      e.target.classList.add("undisplay");
      found.play();
    } else {
      laugh.play();
      setTimeout(() => {
        e.target.classList.add("overlay");
        e.target.classList.remove("undisplay");
      }, 1000);
    }
  }
});
