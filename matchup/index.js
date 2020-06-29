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

  if (chances === 0) {
    $(".start-btn").removeClass("hide");
    for (const item of match) {
      item.classList.remove("rotate");
    }
    $(".game-rules").text("Better Luck next time!");
    setTiles();
    $(".start-btn").click(function () {
      location.reload();
    });
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

$(".start-btn").click(function () {
  setTiles();
  $(".start-btn").addClass("hide");
});
