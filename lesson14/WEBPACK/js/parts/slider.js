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