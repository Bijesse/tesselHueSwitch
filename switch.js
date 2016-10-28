var express = require('express');
var request = require('request');
var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
    var blueButton = new five.Button("a1");
    var redButton = new five.Button("a2");
    var greenButton = new five.Button("a3");
    var yellowButton = new five.Button("a4");
    var sensor = new five.Sensor({
      pin: "a5",
      threshold: 2
    });
    var blueLed = new five.Led("b1");
    var redLed = new five.Led("b2");
    var greenLed = new five.Led("b3");
    var yellowLed = new five.Led("b4");
    var sensorLed = new five.Led("b5");

    var hueURL = "http://192.168.1.3/api/OGIOGrBPRyn1AutXp3tLkZFIbMETdMaUCIBBkCL7";
    //request({ url: url, method: 'PUT', json: {foo: "bar", woo: "car"}}, callback)

    //changes light state to on
    function lightOneOn(){
    request({
      url: hueURL + "/lights/1/state",
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

    //turns brightness up light up to 210/256
    function lightOneBright(){
    request({
      url: hueURL + "/lights/1/state",
      method: 'PUT',
      json: {"bri": 210}
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
    );
  }






});
