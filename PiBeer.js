var W1Temp = require('/usr/local/lib/node_modules/w1temp');
var Blynk = require('/usr/local/lib/node_modules/blynk-library');
var gpio = require('/usr/local/lib/node_modules/rpi-gpio');
var AUTH = 'aa46fedd9fcf42e4b7983939647db885';
var roundedTempInside;

//Setup Blynk (SSL)
var blynk = new Blynk.Blynk(AUTH);

//Sets the relay1 to 1
gpio.setup(16, gpio.DIR_OUT, write);
function write() {
  gpio.write(16, true, function(err) {
    console.log('relay set at high');
  });
}

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
  }, 1000);
});
