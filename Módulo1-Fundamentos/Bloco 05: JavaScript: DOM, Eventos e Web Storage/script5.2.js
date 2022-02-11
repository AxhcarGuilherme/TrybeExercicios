let body = document.getElementById('body');
let title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
title.className = 'title';
body.appendChild(title);

let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';
body.appendChild(section);

let paragraph = document.createElement('p');
paragraph.innerText = 'Lorem?(...)';
section.appendChild(paragraph);

let sectionLeftMain = document.createElement('section');
sectionLeftMain.className = 'left-content';
main.appendChild(sectionLeftMain);

let sectionRightMain = document.createElement('section');
sectionRightMain.className = 'right-content';
main.appendChild(sectionRightMain);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
sectionLeftMain.appendChild(image);

let list = document.createElement('ul');
sectionRightMain.appendChild(list);
function addListItem(list, value) {
  let item = document.createElement('li');
  item.innerText = value;
  list.appendChild(item);
}

addListItem(list, 'um');
addListItem(list, 'dois'); 
addListItem(list, 'três');
addListItem(list, 'quatro');
addListItem(list, 'cinco');
addListItem(list, 'seis');
addListItem(list, 'sete');
addListItem(list, 'oito');
addListItem(list, 'nove');
addListItem(list, 'dez');

for (let index = 0; index < 3; index++) {
  let miniTitle = document.createElement('h3');
  miniTitle.className = 'description';
  main.appendChild(miniTitle);
}
main.removeChild(sectionLeftMain);

sectionRightMain.style.marginRight = '20%';

section.style.backgroundColor = 'green';

list.lastChild.previousSibling.remove();
list.lastChild.remove();