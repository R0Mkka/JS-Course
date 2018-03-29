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

	shopName = prompt("Название вашего магазина?", '').toUpperCase();
	time = 21;
}

//start();

mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		let answer = '';

		for (let i = 0; i < 3; i++){
			answer = 
			prompt("Какой тип товара будем продавать? (Товар номер " + (i + 1) + ")", '' );

			if ((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer != '' && answer.length <= 50 ) {
				mainList.shopGoods[i] = answer;
			} else {
				i--;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time > 8 && time < 20){
			console.log('Время работать!');
			mainList.open = true;
			} else if(time < 24) {
				console.log('Теперь можно и отдохнуть.');
				} else {
					console.log('В сутках только 24 часа!');
				}
	},
	oneDayBudget: function oneDayBudget() {
		alert("Бюджет на 1 день: " + mainList.budget / 30);
	},
	discountSystem: function discountSystem() {
		price = parseFloat(prompt('Введите цену товара:', ''));

		while(isNaN(price) || price == null || price == '') {
			price = parseFloat(prompt('Введите цену товара:', ''));
		}

		if(mainList.discount == true) price *= 0.8;

		console.log(price);
	},
	getEmployers: function getEmployers() {
		for (let i = 0; i < 4; i++){
			mainList.employers[i + 1] = prompt('Введите имя нового сотрудника(' + (i + 1) +')', '');

			while(mainList.employers[i + 1] == null || mainList.employers[i + 1] == ''){
				mainList.employers[i + 1] = prompt('Введите имя нового сотрудника(' + (i + 1) +')', '');
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите товары через запятую', '');

		while(items == null || items == '' || !isNaN(items)){
			items = prompt('Перечислите товары через запятую', '');
		}

		mainList.shopItems = items.split(',');
//		mainList.shopItems.push(prompt('Подождите, еще ', ''));
		mainList.shopItems.sort();
	},
	printShopItems: function printShopItems() {
		document.write('У нас вы можете купить: ' + '<br>');
		mainList.shopItems.forEach(function(item, i) {
			document.write((i + 1) + ': ' + item + '<br>');
		});
	},
	printInfo: function printInfo() {
		console.log('Наш магазин включает в себя: ');
		for (item in mainList){
			console.log(item);
		}
	}
}

console.log(mainList);