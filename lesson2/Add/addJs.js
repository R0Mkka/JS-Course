//1.
let x = 5;

alert(x++);

//2.
console.log([] + false - null + true);

//3.
let y = 1;
	
x = y = 2;

alert(x);

//4.
console.log([] + 1 + 2);

//5.
alert("1"[0]);

//6.
console.log(2 && 1 && null && 0 && undefined);

//7.
let a = 5,
	b = 10;

console.log(!!(a && b));
console.log((a && b));

//8.
alert(null || 2 && 3 || 4);

//9.
let arrA = [1, 2, 3],
	arrB = [1, 2, 3];

console.log(arrA == arrB);

//10.
alert(+"Infinity");

//11.
console.log("ёжик">"яблоко");

//12.
console.log(0 || "" || 2 || undefined || true || false);