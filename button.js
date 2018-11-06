//to run outside of terminal run t2 push button.js

var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  var led = new five.Led("b0");
  var button = new five.Button("a0");
  //button.on("press", () => led.on());
  //button.on("release", () => led.off());

  var hueURL = "http://192.168.0.3/api/7vO9zk1JtTHcbS58c7ZhHECpsxH62coI7gnZwT4J"

  
  // initiate light on
  button.on("press", () =>  lightFiveOn());
  button.on("press", () =>  lightFiveBright());
  button.on("release", () => led.off());
  //changes light state to on

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
  
  
});

