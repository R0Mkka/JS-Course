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