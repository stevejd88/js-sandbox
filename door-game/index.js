const doors = document.querySelector(".doors");
const allDoors = document.querySelectorAll(".door");
const update = document.querySelector("p");
const refresh = document.querySelector(".refresh");
let count = 3;
let won = false;

const found = new Audio("./sounds/take-a-picture.mp3");
const laugh = new Audio("./sounds/laughing.mp3");

const n = Math.floor(Math.random() * allDoors.length);

// load a picture behind a random door
allDoors[n].classList.add("random-peewee");

// Remove or add a class
function removeOrAdd(event, remove, add) {
  event.target.classList.remove(remove);
  event.target.classList.add(add);
}

// Event listener on door click
doors.addEventListener("click", function (e) {
  if (won === false && count > 0) {
    if (e.target.parentNode.classList[0] === "door") {
      removeOrAdd(e, "overlay", "undisplay");
      if (e.target.parentNode.classList[1] === "random-peewee") {
        won = true;
        removeOrAdd(e, "overlay", "undisplay");
        found.play();
      } else {
        laugh.play();
        setTimeout(() => {
          removeOrAdd(e, "undisplay", "overlay");
        }, 1000);
        count -= 1;
      }
    }
    tryCounter(e);
  }
});

// Counter to keep track of tries
function tryCounter(e) {
  if (count === 2 && won === false) {
    update.innerText = "2 tries left!";
  } else if (count === 1 && won === false) {
    update.innerText = "1 Try left!";
  } else if (count === 0 && won === false) {
    update.innerText = "Better luck Next Time!";
    refresh.style.display = "block";
  } else if (won === true) {
    update.innerText = "You found him!!!";
    refresh.style.display = "block";
  }
}

// Event listener to reload game
refresh.addEventListener("click", function () {
  location.reload();
});
