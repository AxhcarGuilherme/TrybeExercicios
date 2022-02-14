function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let daysList = document.querySelector('#days');

function insertDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let num = dezDaysList[index];
    let dayNumber = document.createElement('li');
    dayNumber.innerText = num;
    dayNumber.className = 'day';
    if (dayNumber.innerText == '24' || dayNumber.innerText == '25' || dayNumber.innerText == '31') {
      dayNumber.className = dayNumber.className + ' holiday';
    }
    if (dayNumber.innerText == '4' || dayNumber.innerText == '11' || dayNumber.innerText == '18' || dayNumber.innerText == '25') {
      dayNumber.className = dayNumber.className + ' friday';
    }

    daysList.appendChild(dayNumber);
  }
}
insertDays();

function createButton(str, nameId) {
  let buttons = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = str;
  button.id = nameId;
  buttons.appendChild(button);

}




//botão de feriado
createButton('Feriados', 'btn-holiday');

let btnFeriados = document.getElementById('btn-holiday');
btnFeriados.addEventListener('click', showHolidays);
let holidays = document.querySelectorAll('.holiday');

let color = 'rgb(238,238,238)';
let normalColor = 'white';

function showHolidays() {
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === normalColor) {
      holidays[index].style.backgroundColor = color;
    }
    else {
      holidays[index].style.backgroundColor = normalColor;
    }
  }
}
showHolidays;


//Botão de Sexta
createButton('Sexta-feira', 'btn-friday');

let btnSexta = document.getElementById('btn-friday');
btnSexta.addEventListener('click', showFriday);
let fridays = document.querySelectorAll('.friday');
let text = 'Sextou!!!!';
let dayFriday = [];

function showFriday() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== text) {
      dayFriday.push(fridays[index].innerText);
      fridays[index].innerText = text;
    }
    else {
      fridays[index].innerText = dayFriday[index];
    }
  }
}
showFriday;

function mouseOver() {
  let days = document.getElementById('days');
  days.addEventListener('mouseover', zoomDay);

  function zoomDay(evento) {
    evento.target.style.fontSize = '30px';
    evento.target.style.fontWeight = '550';
  }

}
mouseOver();

function mouseOut() {
  let days = document.getElementById('days');
  days.addEventListener('mouseout', zoomOutDay);

  function zoomOutDay(evento) {
    evento.target.style.fontSize = '20px';
    evento.target.style.fontWeight = '550';
  }

}
mouseOut();
