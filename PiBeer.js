var W1Temp = require('w1temp');


W1Temp.getSensor('28-041692675aff').then(function (sensor) {
    setInterval(function () {
        console.log(sensor.getTemperature());
    }, 1000);
});


W1Temp.getSensor('28-051684c0d6ff').then(function (sensor) {
    setInterval(function () {
        console.log(sensor.getTemperature());
    }, 1000);
});
