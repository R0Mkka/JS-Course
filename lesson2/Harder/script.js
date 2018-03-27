let week = ['Понедельник', 'Вторник', 'Среда', 
			'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let now = new Date();

for (let i = 0; i < week.length; i++){
	if((i == 5 && i + 1 != now.getDay()) || (i == 6 && i + 1 != now.getDay())) {
		document.write(week[i].bold() + '<br \/>');
	} else if((i == 5 && i + 1 == now.getDay()) || (i == 6 && i + 1 == now.getDay())) {
		document.write(week[i].italics() + '<br \/>');
		} else if(i + 1 == now.getDay()) {
			document.write(week[i].italics() + '<br \/>');
			} else document.write(week[i] + '<br \/>');
}

let arr = [];

arr[0] = "654321";
arr[1] = "123";
arr[2] = "78888";
arr[3] = "3123123";
arr[4] = "44444";
arr[5] = "57555";
arr[6] = "03178";

for (let i = 0; i < arr.length; i++){
	if(arr[i][0] == '3' || arr[i][0] == '7') console.log(arr[i]);
}
