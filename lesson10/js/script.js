class options{
	constructor(height, width, bgColor, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bgColor = bgColor;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(){
		let div = document.createElement('div'),
			textString = prompt('Напишите что-нибудь :)', '');

		while(textString == null || textString == ''){
			textString = prompt('Напишите что-нибудь :)', '');
		}

		div.innerHTML = textString;
		div.style.cssText = `height: ${this.height}px; \
    						width: ${this.width}px; \
    						background-color: ${this.bgColor}; \
    						font-size: ${this.fontSize}px; \
    						text-align: ${this.textAlign}`;
    	document.body.appendChild(div);
	}
}

let obj = new options(400, 800, 'red', 50, 'center');

obj.newDiv();
