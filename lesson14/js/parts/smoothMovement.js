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