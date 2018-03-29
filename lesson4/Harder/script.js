let arr = [];

let amount = parseInt(prompt('Какое количество массивов включить в arr?', ''));

while(amount == null || amount == '' || isNaN(amount)){
	amount = parseInt(prompt('Какое количество массивов включить в arr?', ''));
}

for (let i = 0; i < amount; i++){
	let tempArr = [];

	for (let j = 0; j < 5; j++){
		tempArr.push(Math.round(Math.random() * 10));
	}
	arr.push(tempArr);
}

let sum = 0;

for (let i = 0; i < amount; i++){
	for (let j = 0; j < arr[i].length; j++){
		sum += arr[i][j];
	}
}

console.log(arr);
console.log(sum);