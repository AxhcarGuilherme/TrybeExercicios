
function changeColorSqr(square, color) {
  let sqr = document.querySelector(square);
  sqr.style.background = color;
}
changeColorSqr('.main-content', 'rgb(76,164,109');
changeColorSqr('.center-content', 'white');

function changeText(text) {
  document.getElementsByTagName('p')[1].innerText = text;
}
changeText('lorem ...');

function rectifyText(text) {
  document.getElementsByClassName('title')[0].innerText = text;
}
rectifyText('Exercício 5.1 - JavaScript');

function uperCaseParagraph() {
  document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';
}
uperCaseParagraph();

function displayParagraph() {
  let paragraph = document.getElementsByTagName('p');
  for (let index = 0; index < paragraph.length; index++) {
    console.log(paragraph[index]);
  }
}
displayParagraph();