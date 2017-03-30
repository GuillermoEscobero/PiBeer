var W1Temp = require('w1temp');
var Blynk = require('blynk-library');
var AUTH = 'aa46fedd9fcf42e4b7983939647db885';

var blynk = new Blynk.Blynk(AUTH);

blynk.on('connect', function () {

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
});
blynk.on('disconnect', function () {
    console.log('Reconectando')
    blynk.Blynk(AUTH);
});