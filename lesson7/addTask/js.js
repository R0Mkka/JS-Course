let btn = document.querySelector('.btn');

let result = 0;
let timer = false;

let time = document.querySelector('.time');

let first,
	second;

function func1(){
	first = setTimeout(func1,1000);
	result++;
	time.innerHTML = 'Прошло времени: ' + result + ' c';
}

function func2(){
	second = setTimeout(func2,1000);
	result++; 
	time.innerHTML = '';
}

requestAnimationFrame(func2);

btn.addEventListener('click', () => {

	if(timer == false) {
		timer = true;
		btn.innerHTML = 'Скрыть время';
		clearTimeout(second);
		requestAnimationFrame(func1);
		result--;
	} else {
		timer = false;
		btn.innerHTML = 'Показать время';
		clearTimeout(first);
		requestAnimationFrame(func2);
		result--;
	}
});