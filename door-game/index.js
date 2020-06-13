const doors = document.querySelector(".doors");
const allDoors = document.querySelectorAll(".door");
const overlay = document.querySelector(".overlay");
const allOverlays = document.querySelectorAll(".overlay");

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
      // alert("You found me!");
    } else {
      setTimeout(() => {
        e.target.classList.add("overlay");
        e.target.classList.remove("undisplay");
      }, 1000);
    }
  }
});
