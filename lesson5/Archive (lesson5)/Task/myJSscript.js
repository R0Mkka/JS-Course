let second = document.getElementsByClassName('menu-item')[2];
let third = document.getElementsByClassName('menu-item')[1];

let itemsParent = third.parentNode;

itemsParent.replaceChild(third, second);
itemsParent.insertBefore(second, third);

let fifth = document.createElement('li');
fifth.classList.add('menu-item');
fifth.textContent = 'Пятый пункт';

itemsParent.appendChild(fifth);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

document.getElementById('title').innerHTML = 'Мы продаем только подлинную технику Apple';

let adv = document.querySelector('.adv');

adv.remove();

let attitude = prompt("Как вы относитесь к технике Apple?", "");

while(attitude == '' || attitude == null || !isNaN(attitude)){
	attitude = prompt("Как вы относитесь к технике Apple?", "");
}

let promptField = document.getElementById('prompt');

promptField.textContent = attitude;




