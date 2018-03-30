let openButton = document.getElementById('open-btn');

let name = document.querySelector('.name'),
	nameVal = document.querySelector('.name-value');

let budget = document.querySelector('.budget'),
	budgetVal = document.querySelector('.budget-value');

let goods = document.querySelector('.goods'),
	goodsVal = document.querySelector('.goods-value');

let items = document.querySelector('.items'),
	itemsVal = document.querySelector('.items-value');

let employers = document.querySelector('.employers'),
	employersVal = document.querySelector('.employers-value');

let discount = document.querySelector('.discount'),
	discountVal = document.querySelector('.discount-value');

let isopen = document.querySelector('.isopen'),
	isopenVal = document.querySelector('.isopen-value');

/* Я использовал querySelector вместо getElementsByClassName из соображения того, что
   в данном примере у нас нет необходимости брать по несколько элементов одного класса. */

let goodsItems = document.getElementsByClassName('goods-item');

/* let buttons = document.getElementsByTagName('button');
	Вариант для взятия всех четырех кнопок со страницы по тегу, но в
	задании сказано взять только для трех.*/

let mainFuncs = document.querySelector('.main-functions'),
	parent = mainFuncs.parentNode;

let buttons = parent.getElementsByTagName('button');

let chooseItem = document.querySelector('.choose-item'),
	timeVal = document.querySelector('.time-value'),
	countBudgetVal = document.querySelector('.count-budget-value');

let employersNames = document.querySelectorAll('.hire-employers-item');