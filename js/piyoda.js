function piyodaFunc(e) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (el.id == e.target.classList[0]) {
        corCalpiyoda(el.x, el.y, el.id);
      }
    });
  });
}

function corCalpiyoda(x, y, id) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (y == 7) {
        if ((x == el.x && y - 1 == el.y) || (x == el.x && y - 2 == el.y)) {
          let cd = document.querySelector('.card' + el.id);
          if (
            cd.classList[3] == 'qora-ot' ||
            cd.classList[3] == 'qora-fil' ||
            cd.classList[3] == 'qora-vazir' ||
            cd.classList[3] == 'qora-piyoda' ||
            cd.classList[3] == 'qora-tora' ||
            cd.classList[3] == 'qora-shoh'
          ) {
          } else {
            cd.classList.add('hoveredCard1');
          }
        }
      } else if (y == 8) {
      } else {
        if (x == el.x && y - 1 == el.y) {
          let cd = document.querySelector('.card' + el.id);
          if (
            cd.classList[3] == 'qora-ot' ||
            cd.classList[3] == 'qora-fil' ||
            cd.classList[3] == 'qora-vazir' ||
            cd.classList[3] == 'qora-piyoda' ||
            cd.classList[3] == 'qora-tora' ||
            cd.classList[3] == 'qora-shoh'
          ) {
          } else {
            cd.classList.add('hoveredCard1');
          }
        }
      }
    });
  });
}
