function reStartGame() {
  for (let i = 49; i <= 56; i++) {
    document.querySelector('.card' + i).classList.add('qora-piyoda');
  }
  document.querySelector('.card' + 57).classList.add('qora-tora');
  document.querySelector('.card' + 58).classList.add('qora-ot');
  document.querySelector('.card' + 59).classList.add('qora-fil');
  document.querySelector('.card' + 60).classList.add('qora-vazir');
  document.querySelector('.card' + 61).classList.add('qora-shoh');
  document.querySelector('.card' + 62).classList.add('qora-fil');
  document.querySelector('.card' + 63).classList.add('qora-ot');
  document.querySelector('.card' + 64).classList.add('qora-tora');
}
reStartGame();

// if (clicked_stone1 == 'ot') {
//   otFunc(e);
// } else if (clicked_stone1 == 'shoh') {
//   shohFunc(e);
// } else if (clicked_stone1 == 'vazir') {
//   vazirFunc(e);
// } else if (clicked_stone1 == 'fil') {
//   filFunc(e);
// } else if (clicked_stone1 == 'tora') {
//   toraFunc(e);
// } else if (clicked_stone1 == 'piyoda') {
//   piyodaFunc(e);
// }
