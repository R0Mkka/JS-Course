let budget = 0,
	shopName ="",
	mainList = {},
	time,
	price = 0.0;

function start() {
	budget = parseInt(prompt("Ваш бюджет?", "10000"));

	while (isNaN(budget) || budget == "" || budget == null) {
		budget = parseInt(prompt("Ваш бюджет?", "10000"));
	} 

	shopName = prompt("Название вашего магазина?").toUpperCase();
	time = 21;
}

//start();

mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
}

console.log(mainList);

let answer = "";

function chooseGoods() {
	for (let i = 0; i < 3; i++){
		answer = 
		prompt("Какой тип товара будем продавать? (Товар номер " + (i + 1) + ")" );

		if ((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer != '' && answer.length <= 50 ) {
			mainList.shopGoods[i] = answer;
		} else {
			i--;
		}
	}
}

//chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20){
		console.log('Время работать!');
		} else if(time < 24) {
			console.log('Теперь можно и отдохнуть.');
			} else {
				console.log('В сутках только 24 часа!');
			}
}

workTime(15);

function oneDayBudget() {
	alert("Бюджет на 1 день: " + mainList.budget / 30);
}

//oneDayBudget();

function discountSystem() {
	price = parseFloat(prompt('Введите цену товара:'));

	while(isNaN(price) || price == null || price == '') {
		price = parseFloat(prompt('Введите цену товара:'));
	}

	if(mainList.discount == true) price *= 0.8;

	console.log(price);
}

//discountSystem();

function getEmployers() {
	for (let i = 1; i < 5; i++){
		mainList.employers[i] = prompt('Введите имя нового сотрудника(' + i +')');

		while(mainList.employers[i] == null || mainList.employers[i] == ''){
			mainList.employers[i] = prompt('Введите имя нового сотрудника(' + i +')');
		}
	}
}

getEmployers();