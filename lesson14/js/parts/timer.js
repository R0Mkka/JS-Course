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