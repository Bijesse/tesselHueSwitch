var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  var led = new five.Led("b6");
  var motion = new five.Motion("a6");

  var hueURL = "http://192.168.0.3/api/7vO9zk1JtTHcbS58c7ZhHECpsxH62coI7gnZwT4J"

  function waiting(){
    async () => {
  	await sleep(100000)
  	//do stuff
	}	
  }








  motion.on("motionstart", () => led.on());
  motion.on("motionstart", () => lightFiveOn());
  motion.on("motionstart", () => waiting());

  motion.on("motionend", () => led.off());
  motion.on("motionend", () => lightFiveOff());


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

  //changes light 5 state to off
  function lightFiveOff(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"on": false}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

});