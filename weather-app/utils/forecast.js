const request = require('request');

const forecast = (lon, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/'+process.env.FORECAST_API_KEY+'/'+ lat +','+ lon;
    request({
        url: url,
        json: true
    }, (error, response, body) => {
        if (!!error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!!body.error) {
            callback(body.error, undefined);
        } else {
            var str = 'It is currently ';
            str += body.currently.temperature;
            str += ' degree out. There is a ';
            str += body.currently.precipProbability;
            str += '% chance of rain.';
            callback(undefined, str);
        }
    });
};

module.exports = forecast;