var W1Temp = require('w1temp');
var Blynk = require('blynk-library');
var AUTH = 'aa46fedd9fcf42e4b7983939647db885';

//Setup Blynk (SSL)
var blynk = new Blynk.Blynk(AUTH);

blynk.on('connect', function () {
//28-051684c0d6ff built-in temp
//28-041692675aff ds18b20 temp
//Gets the temperature of the outside temp sensor and pushes it to blynk (in an interval of 1000 sec)

    W1Temp.getSensor('28-041692675aff').then(function (sensor) {
        console.log(sensor.getTemperature());
    });

    W1Temp.getSensor('28-051684c0d6ff').then(function (sensor) {
        console.log(sensor.getTemperature());
    });


});

blynk.on('disconnect', function () {
    console.log("DISCONNECT");
    blynk.connect();
});
