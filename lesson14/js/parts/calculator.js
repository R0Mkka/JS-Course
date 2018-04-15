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
		if (days.value == '' ||
			peopleAmount < 1 || 
			daysAmount < 1 ||
			parseFloat(peopleAmount)%parseInt(peopleAmount) > 0 ||
			parseFloat(daysAmount)%parseInt(daysAmount) > 0){

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
		if (people.value == '' ||
			peopleAmount < 1 || 
			daysAmount < 1 ||
			parseFloat(peopleAmount)%parseInt(peopleAmount) > 0 ||
			parseFloat(daysAmount)%parseInt(daysAmount) > 0){

			zeroAnimation();
			total.innerHTML = 0;
		} else {
			totalAnimation();
			let temp = finalPrice;
			total.innerHTML = temp * places.options[places.selectedIndex].value;
		}
	});

	places.addEventListener('change', function() {

		if (days.value == '' ||
			people.value == '' ||
			peopleAmount < 1 || 
			daysAmount < 1 ||
			parseFloat(peopleAmount)%parseInt(peopleAmount) > 0 ||
			parseFloat(daysAmount)%parseInt(daysAmount) > 0){

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