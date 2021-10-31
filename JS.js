"use strict"
let adress = "";
function pretendingOfSanding(buttonId, inputId) {
	adress = document.getElementById(inputId).value;
	if (adress.includes('@') && adress.includes('.'))
	{
		console.log(`Отправка произошла по адрессу ${adress}`);

		// Как бы "отправка письма"

		document.getElementById(buttonId).style.background = "green";
		setTimeout(messageSent, 500);

	}
	else
	{
		console.log("Отправка не произошла, не указан адресс или же он неверен.");
		document.getElementById(buttonId).style.background = "red";
		setTimeout(messageSent, 300);
	}

	function messageSent() {
		document.getElementById(buttonId).style.background = "rgb(212,75,56)";
	}
}
function pageUp() {
	  window.scrollTo(0, 0);
}