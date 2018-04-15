(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modal = require('../parts/modal.js');
	let tab = require('../parts/tab.js');
	let smoothMovement = require('../parts/smoothMovement.js');
	let form = require('../parts/form.js');
	let slider = require('../parts/slider.js');
	let calculator = require('../parts/calculator.js');
	let timer = require('../parts/timer.js');

	modal();
	tab();
	smoothMovement();
	form();
	slider();
	calculator();
	timer();

});


},{"../parts/calculator.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/smoothMovement.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function calculator() {
	let people = document.getElementsByClassName('counter-block-input')[0],
		days = document.getElementsByClassName('counter-block-input')[1],
		places = document.getElementById('select'),
		total = document.getElementById('total'),
		peopleAmount = 0,
		daysAmount = 0,
		finalPrice = 0;

	total.style.display = 'block';
	totalAnimation();

	total.innerHTML = 0;

	people.addEventListener('change', function() {
		
		peopleAmount = +this.value;
		finalPrice = (daysAmount * 4000 + peopleAmount * 2000);
		if (days.value == '' || peopleAmount < 1 || daysAmount < 1){
			zeroAnimation();
			total.innerHTML = 0;
		} else {
			totalAnimation();
			let temp = finalPrice;
			total.innerHTML = temp * places.options[places.selectedIndex].value;
		}
	});

	days.addEventListener('change', function() {
		
		daysAmount = +this.value;
		finalPrice = (daysAmount * 4000 + peopleAmount * 2000);
		if (days.value == '' || daysAmount < 1 || peopleAmount < 1){
			zeroAnimation();
			total.innerHTML = 0;
		} else {
			totalAnimation();
			let temp = finalPrice;
			total.innerHTML = temp * places.options[places.selectedIndex].value;
		}
	});

	places.addEventListener('change', function() {

		if (days.value == '' || people.value == '' || peopleAmount < 1 || daysAmount < 1){
			zeroAnimation();
			total.innerHTML = 0;
		} else {
			totalAnimation();
			let temp = finalPrice;
			total.innerHTML = temp * this.options[this.selectedIndex].value;
		}
	});

	function zeroAnimation(){
		total.classList.add('zero-animation');

		setTimeout(() => {
			total.classList.remove('zero-animation');
		}, 500);
	}

	function totalAnimation(){
		total.classList.add('final-price-animation');

		setTimeout(() => {
			total.classList.remove('final-price-animation');
		}, 1000);
	}
}

module.exports = calculator;
},{}],3:[function(require,module,exports){
function form() {
	let img = document.createElement('img');
  	
  	img.style.cssText = "background: no-repeat; max-width: 150px; padding-top: 10px;";

	let picture = new Object();
	picture.loading = "icons/message/message_sending.png";
	picture.success = "icons/message/message_ok.png";
	picture.failure = "icons/message/message_error.png";

	let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		statusMessage.appendChild(img);
		statusMessage.style.cssText = "text-align: center;";

		// AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);
		request.send(formData);

		request.onreadystatechange = function() {
			if(request.readyState < 4){
				img.setAttribute('src', picture.loading);
			} else if (request.readyState === 4) {
				if (request.status == 200) {
					img.setAttribute('src', picture.success);
				}
				else {
					img.setAttribute('src', picture.failure);
				}
			}
		}
		for (let i = 0; i < input.length; i++){
			input[i].value = '';
			// Очищаем поля ввода
		}
	});

	let contactForm = document.getElementsByTagName('form')[0],
		contactInputs = contactForm.getElementsByTagName('input');

	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);
		statusMessage.appendChild(img);
		statusMessage.style.cssText = "text-align: left;";

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(contactForm);
		request.send(formData);
				
		request.onreadystatechange = function() {
			if(request.readyState < 4){
				img.setAttribute('src', picture.loading);
			} else if (request.readyState === 4) {
				if (request.status == 200) {
					img.setAttribute('src', picture.success);
					removeImage();
				}
				else {
					img.setAttribute('src', picture.failure);
					removeImage();
				}
			}
		}
		for (let i = 0; i < contactInputs.length; i++){
			contactInputs[i].value = '';
		}
	});

	function removeImage() {
		setTimeout(() => {
			statusMessage.removeChild(img);
		}, 3000);
	}
}

module.exports = form;
},{}],4:[function(require,module,exports){
function modal() {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		popup = document.querySelector('.popup');

		overlay.classList.remove('fade');
		popup.classList.add('appearance'); // .appearance описывается в файле css сразу после .fade

	more.addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function(){
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
		img.setAttribute('src', '');
	});
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider() {
	let slideIndex = 0,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	let clicked = false, // переменная для предотвращения многократного нажатия на кнопки вперед/назад
		coeff = 0; // коеффициент, значение которого зависит от того, в какую сторону мы движемся по слайдеру

	// режим 'first' означает, что мы обрабатываем первое вхождение
	showSlides(slideIndex, 'first');

	function showSlides(n, mode){

		clicked = true;

		for (let i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
			slides[i].classList.remove('fade');
			dots[i].classList.remove('dot-active');
		}

		if (mode == 'first'){

			prev.style.display = 'none';
			slides[0].style.opacity = .05;
			slides[0].style.display = 'block';
			dots[0].classList.add('dot-active');

			$('.slider-item:first').animate(
			{
				opacity: 1
			}, 1000, () => {
				clicked = false;
			});

		} else if (mode == 'next' || mode == 'prev'){

			// контроль отображения кнопок перехода
			if (slideIndex == 0){
				prev.style.display = 'none';
			} else if (slideIndex == 3){
					next.style.display = 'none';
				} else {
					next.style.display = 'block';
					prev.style.display = 'block';
				}

			if (mode == 'next') coeff = -1;
			else coeff = 1;

			slides[slideIndex + coeff].style.display = 'block';

			$(`.slider-item:eq(${slideIndex + coeff})`).animate(
			{
				opacity: .05
			}, 1000, () => {
				slides[slideIndex + coeff].style.display = 'none';

				if (mode == 'next') { // блок, выполняемый при движении Вправо
					slideIndex++;
					dots[slideIndex + coeff].classList.add('dot-active');

					slides[slideIndex + coeff].style.opacity = .05;
					slides[slideIndex + coeff].style.display = 'block';

					$(`.slider-item:eq(${slideIndex + coeff})`).animate(
					{
						opacity: 1
					}, 1000, () => {
						slideIndex--;
						clicked = false;
					});
				} else { // блок, выполняемый при движении Влево
					dots[slideIndex].classList.add('dot-active');

					slides[slideIndex].style.opacity = .05;
					slides[slideIndex].style.display = 'block';

					$(`.slider-item:eq(${slideIndex})`).animate(
					{
						opacity: 1
					}, 1000, () => {
						clicked = false;
					});
				}
			});
		} else {

			let currSlide = parseInt(mode),
				nextSlide = n;

			slides[currSlide].style.display = 'block';

			$(`.slider-item:eq(${currSlide})`).animate(
			{
				opacity: .05
			}, 1000, () => {
				slides[currSlide].style.display = 'none';

				dots[currSlide].classList.remove('dot-active');
				dots[nextSlide].classList.add('dot-active');

				slides[nextSlide].style.opacity = .05;
				slides[nextSlide].style.display = 'block';

				$(`.slider-item:eq(${nextSlide})`).animate(
				{
					opacity: 1
				}, 1000, () => {
					clicked = false;
				});
			});

		}
	}

	function plusSlides (n){
		if (n > 0) showSlides(slideIndex += n, 'next');
		else showSlides(slideIndex += n, 'prev');
	}

	function currentSlide(n){
		// передаем в параметрах слайд, по которому тыкнули и текущий слайд
		if(clicked == false) {
			showSlides(n, slideIndex);
			slideIndex = n;
		}
	}

	prev.addEventListener('click', () => {
		if(clicked == false) plusSlides(-1);
	});
	next.addEventListener('click', () => {
		if(clicked == false) plusSlides(1);
	});

	dotsWrap.addEventListener('click', (event) => {
		target = event.target;
		for (let i = 0; i < dots.length + 1; i++){
			if(target.classList.contains('dot') && target == dots[i-1]){
				currentSlide(i - 1);

				if (i == 1){
					prev.style.display = 'none';
					next.style.display = 'block';
				} else if (i == 4){
						next.style.display = 'none';
						prev.style.display = 'block';
					} else {
						next.style.display = 'block';
						prev.style.display = 'block';
					}
			}
		}
	});
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function smoothMovement() {
	let headMenu = document.getElementsByClassName('container')[0];
	let menuFields = document.getElementsByClassName('menu-item');

	headMenu.addEventListener('click', function(event){
		event.preventDefault();
		let target = event.target;

		for (let i = 0; i < menuFields.length; i++){
			if(target == menuFields[i]){
				switch(i){
					case 0: move(550); break;
					case 1: move(1933); break;
					case 2: move(4679); break;
					case 3: move(5268); break;
				}
			}
		}

		function move(dest){
			let top = document.documentElement.scrollTop,
				step = Math.abs(top - dest) / 150,
				speed = 3;

			if(top!=dest){
				let counter = 1;

				setTimeout(oneStep, speed);
						
				function oneStep(){
					if(top < dest) {
						window.scrollTo(0, top+=step);
					}
					else {
						window.scrollTo(0, top-=step);
					}

					if(counter <= 149) setTimeout(oneStep, speed);
					counter++;
				}
			}
		}
	});
}

module.exports = smoothMovement;
},{}],7:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0],
		description = document.getElementsByClassName('description');
		descriptionBtn = document.getElementsByClassName('description-btn'),
		overlay = document.querySelector('.overlay'),

	hideTabContent(1);

	function hideTabContent(a){
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	function showTabContent(b) {
		if( tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++){
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	for (let i = 0; i < description.length; i++){
		description[i].addEventListener('click', function (event){
			let target = event.target;
			if (target.className == 'description-btn'){
				for (let j = 0; j < descriptionBtn.length; j++){
					if (target == descriptionBtn[j]) {
						overlay.style.display = 'block';
						document.body.style.overflow = 'hidden';
						break;
					}
				}
			}
		});
	}
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	let deadline = '2018-04-20';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = 0,
			minutes = 0,
			hours = 0,
			days = 0;
			if(t > 0){
				seconds = Math.floor( (t/1000) % 60 ), 
				minutes = Math.floor( (t/1000/60) % 60),
				hours = Math.floor( (t/1000/60/60) % 24 ),
				days = Math.floor( (t/ (1000*60*60*24)) );
			}

			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			days = timer.querySelector('.days');
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

		let test = getTimeRemaining(endtime);

		if(test.total > -1) {

			updateClock();

			let timeInterval = setInterval(updateClock, 1000);

			function updateClock(){
				let t = getTimeRemaining(endtime);

				if(t.total <= 0){
					days.innerHTML = 'Осталось 0 дней';
					hours.innerHTML = '00';
					minutes.innerHTML = '00';
					seconds.innerHTML = '00';
				} else {
					let daysString = '';

					if((t.days % 100 > 1) && (t.days % 100 < 5)){
						daysString = ' дня';
					} else if((t.days % 100 > 4) && (t.days % 100 < 21)){
						daysString = ' дней';
						} else if((t.days % 10 > 1) && (t.days % 10 < 5)){
							daysString = ' дня';
							} else {
								daysString = ' дней';
							}
 
					if(t.days % 10 == 1) days.innerHTML = 'Остался ' + t.days + ' день';
					else {
						days.innerHTML = 'Осталось ' + t.days + daysString;
					}
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;
				}

				if(t.total <= 0){
					clearInterval(timeInterval);
				}
			}
		} else {
			days.innerHTML = 'Осталось 0 дней';
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
		}

	};
	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
