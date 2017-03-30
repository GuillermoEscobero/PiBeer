var W1Temp = require('w1temp');

setInterval(
    function getTemperatureSonda() {
        W1Temp.getSensor('28-041692675aff').then(function (sensor) {
            console.log(sensor.getTemperature());
        });
    }, 1000);

setInterval(
    function getTemperatureBuiltIn() {
        W1Temp.getSensor('28-051684c0d6ff').then(function (sensor) {
            console.log(sensor.getTemperature());
        });
    }, 1000);