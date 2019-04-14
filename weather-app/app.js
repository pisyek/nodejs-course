require('dotenv').config();
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = process.argv[2];

if (!place) {
    console.log('Please enter a place name!')
} else {
    geoCode(place, (error, { longitude, latitude, location }) => {
        if (!!error) {
            console.log(error);
            return;
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (!!error) {
                console.log(error);
                return;
            }

            console.log(location);
            console.log(forecastData);
        });
    });
}