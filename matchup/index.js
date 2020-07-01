const tiles = document.querySelector(".tiles");
let guesses = 2;
let chances = 15;
let twoParents = [];
let twoTiles = [];
let match = [];
let playing = false;

const images = [
  "chewy",
  "chewy",
  "vader",
  "vader",
  "luke",
  "luke",
  "r2",
  "r2",
  "star",
  "star",
  "trooper",
  "trooper",
  "c3po",
  "c3po",
  "leia",
  "leia",
  "rebel",
  "rebel"
];

const theForce = new Audio("./sounds/the-force.mp3");
const theme = new Audio("./sounds/theme.mp3");
const cocky = new Audio("./sounds/cocky.mp3");
const blasters = new Audio("./sounds/blasters.mp3");
const amaze = new Audio("./sounds/amaze.mp3");
const roar = new Audio("./sounds/roar.mp3");
const strong = new Audio("./sounds/strong.mp3");

const winSounds = [cocky, amaze, roar, strong];

// func to choose a random sound on air match
function randomWinSound() {
  let n = Math.floor(Math.random() * winSounds.length);
  const matchsound = winSounds[n].play();
  return matchsound;
}

// func to to shuffle through images array
function shuffle(arr) {
  var i = arr.length,
    temp,
    randomIndex;

  while (--i > 0) {
    randomIndex = Math.floor(Math.random() * i);
    temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// func to do soemthing to children of tiles
function setTiles() {
  const newArray = shuffle(images);
  playing = true;
  for (let i = 0; i < newArray.length; i++) {
    tiles.children[i].children[0].children[1].children[0].setAttribute(
      "src",
      `./img/${newArray[i]}.png`
    );
    tiles.children[i].children[0].children[1].children[0].setAttribute(
      "name",
      `${newArray[i]}`
    );
  }
}

// func to check a tile match
function matchCheck(e) {
  if (twoTiles[0] === twoTiles[1]) {
    console.log("Its a match");
    match.push(twoParents[0]);
    match.push(twoParents[1]);
    guesses = 2;
    randomWinSound();
  } else {
    for (const item of twoParents) {
      setTimeout(() => {
        item.classList.remove("rotate");
        guesses++;
      }, 1000);
    }
    chances--;
  }
  twoParents = [];
  twoTiles = [];

  if (match.length === 18) {
    blasters.play();
    $(".update").text("The Force is strong with you !");
    $(".refresh").toggle("hide");
  }

  if (chances === 0) {
    for (const item of match) {
      item.classList.remove("rotate");
    }
    theForce.play();
    $(".update").text("Use the force Luke/Luca !");
    $(".refresh").toggle("hide");
    $(".tile-container").toggle("hide");
  }
}

// Event listener to flip a tile
tiles.addEventListener("click", function (e) {
  if (e.target.parentNode.classList[0] === "flip-card-inner") {
    if (guesses > 0 && chances > 0) {
      let name = e.target.parentNode.children[1].children[0].getAttribute(
        "name"
      );
      twoTiles.push(name);
      twoParents.push(e.target.parentNode);
      e.target.parentNode.classList.add("rotate");
      guesses--;
      if (twoTiles.length === 2) {
        matchCheck();
      }
    }
  }
});

// event listener to start the game
$(".start-btn").click(function () {
  setTiles();
  $(".start-btn").toggle("hide");
  $(".tile-container").toggle("hide");
  document.getElementById("my_audio").pause();
});

// event listener to start the game over
$(".refresh").click(function () {
  location.reload();
});

// event listerner on start
$(document).ready(function () {
  setTimeout(() => {
    $(".crawl-container").toggle("hide");
    $("body").removeClass("body1");
    $("body").addClass("body2");
    $(".start-btn").toggle("hide");
  }, 20000);
});

window.onload = function () {
  document.getElementById("my_audio").play();
};
