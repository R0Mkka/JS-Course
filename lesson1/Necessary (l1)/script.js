let budget = 0,
	shopName ="",
	mainList = {};

budget = +prompt("Ваш бюджет?", "10000");

shopName = prompt("Название вашего магазина?");

console.log("Введенный бюджет: " + budget);
console.log("Введенное название магазина: " + shopName);

mainList = {
	budget: 200000,
	shopName: "AlexanovShop",
	shopGoods: ["Клавиатуры", "Мыши", "Мониторы"],
	employers: {
		John: "Продавец",
		Mary: "Менеджер по продажам",
		Roman: "Директор"
	},
	open: true
}

console.log("Содержание полей mainList: ");
console.log("Бюджет: " + mainList.budget);
console.log("Название магазина: " + mainList.shopName);
console.log("Товары магазина:");

for (let i = 0; i < mainList.shopGoods.length; i++){
	console.log(mainList.shopGoods[i]);
}

console.log("Персонал: ");
console.log("Джон: " + mainList.employers.John);
console.log("Мэри: " + mainList.employers.Mary);
console.log("Роман: " + mainList.employers.Roman);

if (mainList.open){
	console.log("Состояние магазина: Открыт." );
} else {
	console.log("Состояние магазина: Закрыт." );
}

for (let i = 0; i < 3; i++){
	mainList.shopGoods[i] = 
	prompt("Какой тип товара будем продавать? (Товар номер " + (i + 1) + ")" );
}

console.log("Новые товары:");

for (let i = 0; i < 3; i++){
	console.log(mainList.shopGoods[i]);
}

let oneDayBudget = mainList.budget / 30;

console.log("Бюджет на 1 день: " + oneDayBudget);