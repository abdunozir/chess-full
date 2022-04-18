function otFunc(e) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (el.id == e.target.classList[0]) {
        corCalot(el.x, el.y, +e.target.classList[0]);
      }
    });
  });
}

function corCalot(x, y, id) {
  chessObj.forEach((item) => {
    item.forEach((el) => {
      if (
        (x + 1 == el.x && y - 2 == el.y) ||
        (x - 1 == el.x && y - 2 == el.y) ||
        (x - 1 == el.x && y + 2 == el.y) ||
        (x + 1 == el.x && y + 2 == el.y) ||
        (x - 2 == el.x && y + 1 == el.y) ||
        (x - 2 == el.x && y - 1 == el.y) ||
        (x + 2 == el.x && y + 1 == el.y) ||
        (x + 2 == el.x && y - 1 == el.y)
      ) {
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
    });
  });
}
