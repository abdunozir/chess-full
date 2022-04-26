let chess_board = document.querySelector(".chess_board");
let cards = document.querySelector(".cards");

let clicked_stone;
let clickedCardClass;
let eve;

let card = "";
for (let i = 0; i < chessObj.length; i++) {
  let rows = document.createElement("div");
  rows.className = "rows";
  for (let j = 0; j < chessObj[i].length; j++) {
    card += `<div   class=" ${chessObj[i][j].id} card${chessObj[i][j].id} card"></div>`;
  }
  rows.innerHTML = card;
  card = "";
  cards.appendChild(rows);
}

let board_cards = document.querySelectorAll(".card");
let true_place;
board_cards.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.currentTarget.classList.value.includes("qora")) {
      removeColor();
      clickedCardClass =
        e.currentTarget.classList[e.currentTarget.classList.length - 1];

      let clickedCardClass_splitted = clickedCardClass.split("-");

      if (clickedCardClass_splitted[1] == "ot") {
        otFunc(e);
      } else if (clickedCardClass_splitted[1] == "shoh") {
        shohFunc(e);
      } else if (clickedCardClass_splitted[1] == "vazir") {
        vazirFunc(e);
      } else if (clickedCardClass_splitted[1] == "fil") {
        filFunc(e);
      } else if (clickedCardClass_splitted[1] == "tora") {
        toraFunc(e);
      } else if (clickedCardClass_splitted[1] == "piyoda") {
        piyodaFunc(e);
      }
      true_place = document.querySelectorAll(".hoveredCard1");
      eve = e;
      moveAblePlace();
    }
  });
});

const sbc = (ev) => {
  eve.target.classList.remove(clickedCardClass);
  ev.target.classList.add(clickedCardClass);
  removeColor();
  true_place.forEach((item) => {
    item.removeEventListener("click", eventLis);
  });
};

// MOVE STONE
const eventLis = (ev) => sbc(ev);

function moveAblePlace() {
  console.log(true_place);
  document.querySelectorAll(".hoveredCard1").forEach((item) => {
    item.addEventListener("click", eventLis);
  });
}

// remove blue color
function removeColor() {
  //   when stone clicked
  if (document.querySelectorAll(".hoveredCard1").length > 1) {
    document
      .querySelectorAll(".hoveredCard1")
      .forEach((item) => item.classList.remove("hoveredCard1"));
  } else if (document.querySelector(".hoveredCard1") !== null) {
    document.querySelector(".hoveredCard1").classList.remove("hoveredCard1");
  }
}

function to3D(e) {
  cards.classList.toggle("click3D");
  if (e.target.innerHTML == "2D") {
    e.target.innerHTML = "3D";
  } else {
    e.target.innerHTML = "2D";
  }
}
