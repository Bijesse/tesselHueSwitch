//to run - t2 run room-all.js
//to push and stay active on tessel - t2 push room-all.js

var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  
  
  var ledAllOff = new five.Led("b2"); 
  var ledAllOn = new five.Led("b3"); 

  var buttonAllOff = new five.Button("a2");
  var buttonAllOn = new five.Button("a3");

  //potentiometer dimmer declaration
  var sensor = new five.Sensor({
    pin: "a7",
    threshold: 2
  });


  var hueURL = "http://192.168.0.3/api/7vO9zk1JtTHcbS58c7ZhHECpsxH62coI7gnZwT4J"
 
  // Lights 5 6 7 8 to on
  buttonAllOn.on("press", () =>  lightFiveOn());
  buttonAllOn.on("press", () =>  lightSixOn());
  buttonAllOn.on("press", () =>  lightSevenOn());
  buttonAllOn.on("press", () =>  lightEightOn());
  buttonAllOn.on("press", () => ledAllOn.on());
  buttonAllOn.on("release", () => ledAllOn.off());

  // Lights 5 6 7 8 to off
  buttonAllOff.on("press", () =>  lightFiveOff());
  buttonAllOff.on("press", () =>  lightSixOff());
  buttonAllOff.on("press", () =>  lightSevenOff());
  buttonAllOff.on("press", () =>  lightEightOff());
  buttonAllOff.on("press", () => ledAllOff.on());
  buttonAllOff.on("release", () => ledAllOff.off());


/*
  // Lights 5 6 8 to bright
  buttonSun.on("press", () =>  lightFiveBright());
  buttonSun.on("press", () =>  lightSixBright());
  buttonSun.on("press", () =>  lightEightBright());

  // Light 5 6 8 to Sun Hue
  buttonSun.on("press", () =>  lightFiveSun());
  buttonSun.on("press", () =>  lightSixSun());  
  buttonSun.on("press", () =>  lightEightSun()); 
  */

  //potentiometer dimmer
  sensor.on("change", () =>  hueDim());
  
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

  //changes light 7 state to on
  function lightSevenOn(){
  request({
      uri: hueURL + "/lights/7/state/",
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

  //changes light 6 state to off
  function lightSixOff(){
  request({
      uri: hueURL + "/lights/6/state/",
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

  //changes light 7 state to off
  function lightSevenOff(){
  request({
      uri: hueURL + "/lights/7/state/",
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

  //changes light 8 state to on
  function lightEightOff(){
  request({
      uri: hueURL + "/lights/8/state/",
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

  //defines scale on potentiometer for on light 1
    function hueDim(){
      request({
        url: hueURL + "/lights/5/state",
        method: 'PUT',
        json: {"bri":sensor.scaleTo(0, 255)}
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

