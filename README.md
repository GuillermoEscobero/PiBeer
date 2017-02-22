SETUP:
Run this command (it updates your OS package repository to include the required packages):
 curl -sL "https://deb.nodesource.com/setup_6.x" | sudo -E bash -
 
Download and build Blynk JS library using npm:
 sudo apt-get update && sudo apt-get upgrade
 sudo apt-get install build-essential
 sudo npm install -g npm
 sudo npm install -g onoff
 sudo npm install -g blynk-library
 sudo npm install -g W1Temp
 sudo npm install -g rpi-gpio

Run Blynk test script (put your auth token):
 blynk-client <Auth Token>

To enable Blynk auto restart for Pi, find /etc/rc.local file and add there:
 node full_path_to_your_script.js <Auth Token>
 
Githubs of the node modules used in addition to npm, onoff and blynk-library (if following official blynk setup doc)
 https://github.com/kolarcz/node-w1temp
 https://github.com/JamesBarwell/rpi-gpio.js

USAGE:

TODO:
