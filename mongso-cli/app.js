const request = require ('request');

const argv = require('yargs').argv;

const today = new Date();

let apiKey = 'fe90a75498e98cc0fd6c31d72a770689';

let city = argv.c || 'Temanggung';

url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function(err, response, body) {
	if(err){
		console.log('error:', error);
	} else {
		// console.log('body:', body);
		let mongso = JSON.parse(body)
		let message = `It's ${mongso.weather[0].main} with ${mongso.main.temp} degrees in ${mongso.name}!`;
		console.log(message);
		console.log(mongso);
		console.log(today);
	}
});