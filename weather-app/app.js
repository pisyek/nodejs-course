const request = require('request');
const url = 'https://api.darksky.net/forecast/a9ebf16afcb249fd73eae9455f311e41/37.8267,-122.4233';
const param = {
    url: url,
    json: true
};

request(param, (error, response, body) => {
    const temp = body.currently.temperature;
    const chance = body.currently.precipProbability;
    console.log('It is currently ' + temp + ' degree out. There is a ' +chance+ '% chance of rain.');
});