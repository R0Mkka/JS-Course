let num = 33721,
	first = 0,
	second = 0,
	third = 0,
	fourth = 0,
	fifth = 0;

first = Math.floor(num / 10000);
second = Math.floor(num / 1000 % 10);
third = Math.floor(num / 100 % 10);
fourth = Math.floor(num / 10 % 10);
fifth = Math.floor(num % 10);

let multiply = first * second * third * fourth * fifth;

console.log("Произведение цифр числа " + num + ": " + multiply);

console.log("Возведение результата в третью степень: " + Math.pow(multiply,3));
