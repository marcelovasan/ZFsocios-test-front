simplyCountdown('#cuenta', {
	year: 2022, // required
	month: 9, // required
	day: 11, // required
	hours: 13, // Default is 0 [0-23] integer
	minutes: 48, // Default is 0 [0-59] integer
	seconds: 59, // Default is 0 [0-59] integer
	words: { //words displayed into the countdown
		days: { singular: 'Dia', plural: 'Dias' },
		hours: { singular: 'Hora', plural: 'Horas' },
		minutes: { singular: 'Minuto', plural: 'Minutos' },
		seconds: { singular: 'Segundo', plural: 'segundos' },
		pluralLetter: 's'
	},
	plural: true, //use plurals
	inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
	inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
	// in case of inline set to false
	enableUtc: false, //Use UTC or not - default : false
	onEnd: function () {
		//Oculta el archivo y muestra el archivo 
		alert('Lanzamiento oficial de Zapphiro Company ha comenzado');
		document.getElementById('Portada').classList.add('oculto');
		return;
	}, //Callback on countdown end, put your own function here
	refresh: 1000, // default refresh every 1s
	sectionClass: 'flex', //section css class
	amountClass: 'countdown-number', // amount css class
	wordClass: 'countdown-letter', // word css class
	zeroPad: false,
	countUp: false,
});