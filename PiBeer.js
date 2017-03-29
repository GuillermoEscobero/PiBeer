var W1Temp = require('w1temp');
var Blynk = require ('blynk-library');
var AUTH = 'aa46fedd9fcf42e4b7983939647db885';
var roundedTempInside;
var roundedTempOutside;

//Setup Blynk (SSL)
var blynk = new Blynk.Blynk(AUTH);

blynk.on('connect', function() {
//28-051684c0d6ff built-in temp
//28-041692675aff ds18b20 temp
//Gets the temperature of the outside temp sensor and pushes it to blynk (in an interval of 1000 sec)
  W1Temp.getSensor('28-041692675aff').then(function (sensor) {
    setInterval(function() {
      //Round the temperature to the nearest integer
      roundedTempInside = Math.round(sensor.getTemperature()*10)/10;

      //Display a log in the terminal
      console.log('Temp on the inside:', roundedTempInside,'°C');

      //Report it to server on virtual pin 0 (V0)
      blynk.virtualWrite(0, roundedTempInside);
    }, 10000);
  });

  W1Temp.getSensor('28-051684c0d6ff').then(function (sensor) {
    setInterval(function() {
      //Round the temperature to the nearest integer
      roundedTempOutside = Math.round(sensor.getTemperature()*10)/10;

      //Display a log in the terminal
      console.log('Temp on the outside:', roundedTempOutside,'°C');

      //Report it to server on virtual pin 0 (V0)
      blynk.virtualWrite(1, roundedTempOutside);
    }, 10000);
  });

  blynk.on('disconnect', function() {
    console.log("DISCONNECT");
    blynk.connect();
  });
});
