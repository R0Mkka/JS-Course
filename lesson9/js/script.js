window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a){
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

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

// timer

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

// плавное пережвижение к пункту меню

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

// Modal

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
	});

});