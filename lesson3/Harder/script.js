let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);

console.log(str);

for (let i = 0; i < str.length; i++){
	if(str.charAt(i) === '-'){
		str = str.replace('-', ' ');
	}
}

console.log(str);

let word = 'легким',
	newStr = str.substr(str.indexOf(word), word.length);

/*
Второй вариант, как вырезать:

let	newStr = str.substr(19, 6);

Если вдруг тот не подойдет из-за присутствия самого слова.
*/

document.write('Вырезанное слово: ' + newStr + '<br>');

newStr = newStr.replace('им','');
newStr += 'о';

document.write('Измененное слово: ' + newStr + '<br>');

let arr = [20, 33, 1, 'Человек', 2, 3],
	sum = 0,
	squareRoot = 0.0;

for (let i = 0; i < arr.length; i++){
	if(isNaN(arr[i]) == false) sum += Math.pow(arr[i],3);
}

squareRoot = Math.sqrt(sum);

console.log(sum);
console.log(squareRoot);