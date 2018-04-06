let age = document.getElementById('age');

function showUser(name, surname){
	alert('Пользователь ' + surname + ' ' + name + 
		', его возраст '+ this.value);
};

showUser.call(age, 'Роман', 'Алексанов');