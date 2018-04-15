function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0],
		description = document.getElementsByClassName('description');
		descriptionBtn = document.getElementsByClassName('description-btn'),
		overlay = document.querySelector('.overlay'),

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