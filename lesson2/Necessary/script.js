let budget = 0,
	shopName ="",
	mainList = {};

budget = +prompt("Ваш бюджет?", "10000");
shopName = prompt("Название вашего магазина?");

mainList = {
	budget: budget,
	shopName: shopName,
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
	let answer =  
	prompt("Какой тип товара будем продавать? (Товар номер " + (i + 1) + ")" );

	if ((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer != '' && answer.length <= 50 ) {
		mainList.shopGoods[i] = answer;
	} else {
		i--;
	}
}

/*let i = 0;

while(i < 3){
	let answer =  
	prompt("Какой тип товара будем продавать? (Товар номер " + (i + 1) + ")" );

	if ((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer != '' && answer.length <= 50 ) {
		mainList.shopGoods[i] = answer;
	} else {
		i--;
	}

	i++;
}

i = 0;

do {
	let answer =  
	prompt("Какой тип товара будем продавать? (Товар номер " + (i + 1) + ")" );

	if ((typeof(answer)) === 'string' && (typeof(answer)) !== null && answer != '' && answer.length <= 50 ) {
		mainList.shopGoods[i] = answer;
	} else {
		i--;
	}

	i++;
} while (i < 3);
*/

console.log("Новые товары:");

for (let i = 0; i < 3; i++){
	console.log(mainList.shopGoods[i]);
}

alert("Бюджет на 1 день: " + mainList.budget / 30);