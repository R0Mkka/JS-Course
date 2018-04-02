let openButton = document.getElementById('open-btn');

let nameCol = document.querySelector('.name'),
	nameVal = document.querySelector('.name-value');

let budgetCol = document.querySelector('.budget'),
	budgetVal = document.querySelector('.budget-value');

let goodsCol = document.querySelector('.goods'),
	goodsVal = document.querySelector('.goods-value');

let itemsCol = document.querySelector('.items'),
	itemsVal = document.querySelector('.items-value');

let employersCol = document.querySelector('.employers'),
	employersVal = document.querySelector('.employers-value');

let discountCol = document.querySelector('.discount'),
	discountVal = document.querySelector('.discount-value');

let isopenCol = document.querySelector('.isopen'),
	isopenVal = document.querySelector('.isopen-value');

let goodsItems = document.getElementsByClassName('goods-item');

let mainFuncs = document.querySelector('.main-functions'),
	parent = mainFuncs.parentNode;

let goodsBtn = parent.getElementsByTagName('button')[0];
let budgetBtn = parent.getElementsByTagName('button')[1];
let employersBtn = parent.getElementsByTagName('button')[2];
let activateDiscountBtn = parent.getElementsByTagName('button')[3];
let finalPrice = parent.querySelector('.final-price-value');

let chooseItem = document.querySelector('.choose-item'),
	timeVal = document.querySelector('.time-value'),
	countBudgetVal = document.querySelector('.count-budget-value');

let employersNames = document.querySelectorAll('.hire-employers-item');

let budget = 0,
	shopName ="",
	mainList = {},
	price = 0.0;

openButton.addEventListener('click', () => {
	budget = parseInt(prompt("Ваш бюджет?", "10000"));

	while (isNaN(budget) || budget == "" || budget == null) {
		budget = parseInt(prompt("Ваш бюджет?", "10000"));
	}

	budgetVal.textContent = budget;

	shopName = prompt("Название вашего магазина?", '');

	while (shopName == null || shopName == '' || shopName.length > 50){
		shopName = prompt("Название вашего магазина?", '');
	}

	nameVal.textContent = shopName.toUpperCase();
});

goodsBtn.addEventListener('click', () => {
	let answer = '';

	for (let i = 0; i < goodsItems.length; i++){
		answer = goodsItems[i].value;

		if ((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer.length <= 50 ) {
			mainList.shopGoods[i] = answer;
			goodsVal.textContent = mainList.shopGoods;
		} else {
			i--;
		}
	}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if (items != '' && isNaN(items)){
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		itemsVal.textContent = mainList.shopItems;
	}
});

timeVal.addEventListener('change', () => {
	let time = timeVal.value;

	if (time < 0) {
			console.log('Такого не может быть!');
			mainList.open = false;
		} else if (time > 8 && time < 20){
			console.log('Время работать!');
			mainList.open = true;
			} else if(time < 24) {
				console.log('Теперь можно и отдохнуть.');
				mainList.open = false;
				} else {
					console.log('В сутках только 24 часа!');
					mainList.open = false;
				};

	if(mainList.open) {
		isopenVal.style.backgroundColor = 'green';
	} else {
		isopenVal.style.backgroundColor = 'red';
	}
});

budgetBtn.addEventListener('click', () => {
	countBudgetVal.value = budget / 30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < employersNames.length; i++){
		let name = employersNames[i].value;
		mainList.employers[i] = name;

		employersVal.textContent += mainList.employers[i] + ' ';
	}
});

activateDiscountBtn.addEventListener('click', () => {
	if(mainList.discount == false) {
		discountVal.style.backgroundColor = 'green';
		mainList.discount = true;

		price *= 0.5;
		finalPrice.value = price + ' (скидка 50%)';
	} else {
		discountVal.style.backgroundColor = 'red';
		mainList.discount = false;

		price *= 2;
		finalPrice.value = price;
	}


 });

finalPrice.addEventListener('click', () => {
	price = parseFloat(prompt('Введите цену товара: ', ''));

	while (isNaN(price) || price == null || price == ''){
		price = parseFloat(prompt('Введите цену товара: ', ''));
	}

	if(mainList.discount){
		price *= 0.5;
		finalPrice.value = price + ' (скидка 50%)';
	} else {
		finalPrice.value = price;
	}
});

mainList = {
	budget: budget,
	shopName: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
}