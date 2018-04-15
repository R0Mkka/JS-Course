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