//to run outside of terminal run t2 push button.js

var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  //LED and button to turn 3 living room lights to sun
  var ledSun = new five.Led("a5");
  var buttonSun = new five.Button("a2");


  var hueURL = "http://192.168.0.3/api/7vO9zk1JtTHcbS58c7ZhHECpsxH62coI7gnZwT4J"

  // Turn LED on board on and off
  buttonSun.on("press", () => ledSun.on());
  buttonSun.on("release", () => ledSun.off());
 
  // Lights 5 6 8 to on
  buttonSun.on("press", () =>  lightFiveOn());
  buttonSun.on("press", () =>  lightSixOn());
  buttonSun.on("press", () =>  lightEightOn());

  // Lights 5 6 8 to bright
  buttonSun.on("press", () =>  lightFiveBright());
  buttonSun.on("press", () =>  lightSixBright());
  buttonSun.on("press", () =>  lightEightBright());

  // Light 5 6 8 to Sun Hue
  buttonSun.on("press", () =>  lightFiveSun());
  buttonSun.on("press", () =>  lightSixSun());  
  buttonSun.on("press", () =>  lightEightSun()); 
  

  //changes light 5 state to on
  function lightFiveOn(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"on": true}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightFiveBright(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"bri": 251}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }
  
  function lightFiveSun(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 10778}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  

  //changes light 6 state to on
  function lightSixOn(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"on": true}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixBright(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"bri": 251}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }
  
  function lightSixSun(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 10778}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

//changes light 8 state to on
  function lightEightOn(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"on": true}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightBright(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"bri": 251}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }
  
  function lightEightSun(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 10778}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

});

