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
  
  
  var ledAllOff = new five.Led("b2"); //Blue Light
  var ledSun = new five.Led("b3");  //Red Light
  var ledStar = new five.Led("b4");  //Green Light
  var ledSpring = new five.Led("b5");  //Yellow Light

  var buttonAllOff = new five.Button("a2"); //Blue Button
  var buttonSun = new five.Button("a3");  //Red Button
  var buttonStar = new five.Button("a4");  //Green Button
  var buttonSpring = new five.Button("a5");  //Yellow Button

/*
  //potentiometer dimmer declaration
  var sensor = new five.Sensor({
    pin: "a7",
    threshold: 2
  });
*/

  var hueURL = "http://192.168.0.5/api/7vO9zk1JtTHcbS58c7ZhHECpsxH62coI7gnZwT4J"
 
  // Lights 5 6 7 8 to off: Blue Button
  buttonAllOff.on("press", () =>  lightFiveOff());
  buttonAllOff.on("press", () =>  lightSixOff());
  buttonAllOff.on("press", () =>  lightSevenOff());
  buttonAllOff.on("press", () =>  lightEightOff());
  buttonAllOff.on("press", () =>  ledAllOff.on());
  buttonAllOff.on("release", () =>  ledAllOff.off());


  // Lights 5 6 7 8 to Sun: Red Button
  buttonSun.on("press", () =>  lightFiveOn());
  buttonSun.on("press", () =>  lightSixOn());
  buttonSun.on("press", () =>  lightEightOn());
  buttonSun.on("press", () =>  lightFiveBright());
  buttonSun.on("press", () =>  lightSixBright());
  buttonSun.on("press", () =>  lightEightBright());
  buttonSun.on("press", () =>  lightSevenOn());
  buttonSun.on("press", () =>  lightSevenBright());
  buttonSun.on("press", () =>  ledSun.on());

  buttonSun.on("release", () => lightFiveSunHue());
  buttonSun.on("release", () => lightSixSunHue());
  buttonSun.on("release", () => lightEightSunHue());
  buttonSun.on("release", () => lightFiveSunSat());
  buttonSun.on("release", () => lightSixSunSat());
  buttonSun.on("release", () => lightEightSunSat());
  buttonSun.on("release", () => lightSevenSunHue());
  buttonSun.on("release", () => lightSevenSunSat());
  buttonSun.on("release", () => ledSun.off());

  // Lights 5 6 7 8 to Starlight: Green Button
  buttonStar.on("press", () =>  lightFiveOn());
  buttonStar.on("press", () =>  lightSixOn());
  buttonStar.on("press", () =>  lightEightOn());
  buttonStar.on("press", () =>  lightFiveStarBright());
  buttonStar.on("press", () =>  lightSixStarBright()); 
  buttonStar.on("press", () =>  lightEightStarBright());
  buttonStar.on("press", () =>  lightSevenOn());
  buttonStar.on("press", () =>  lightSevenStarBright());
  buttonStar.on("press", () =>  ledStar.on());

  buttonStar.on("release", () => lightFiveStarHue());
  buttonStar.on("release", () => lightSixStarHue()); 
  buttonStar.on("release", () => lightEightStarHue());
  buttonStar.on("release", () => lightFiveStarSat());
  buttonStar.on("release", () => lightSixStarSat());
  buttonStar.on("release", () => lightEightStarSat());
  buttonStar.on("release", () => lightSevenStarHue());
  buttonStar.on("release", () => lightSevenStarSat());
  buttonStar.on("release", () => ledStar.off());

  // Lights 5 6 7 8 to Spring Blossom: Yellow Button
  buttonSpring.on("press", () =>  lightFiveOn());
  buttonSpring.on("press", () =>  lightSixOn());
  buttonSpring.on("press", () =>  lightEightOn());
  buttonSpring.on("press", () =>  lightFiveSpringBright());
  buttonSpring.on("press", () =>  lightSixSpringBright());
  buttonSpring.on("press", () =>  lightEightSpringBright());
  buttonSpring.on("press", () =>  lightSevenOn());
  buttonSpring.on("press", () =>  lightSevenSpringBright());
  buttonSpring.on("press", () =>  ledSpring.on());

  buttonSpring.on("release", () => lightFiveSpringHue());
  buttonSpring.on("release", () => lightSixSpringHue());
  buttonSpring.on("release", () => lightEightSpringHue());
  buttonSpring.on("release", () => lightFiveSpringSat());
  buttonSpring.on("release", () => lightSixSpringSat());
  buttonSpring.on("release", () => lightEightSpringSat());
  buttonSpring.on("release", () => lightSevenSpringHue());
  buttonSpring.on("release", () => lightSevenSpringSat());
  buttonSpring.on("release", () => ledSpring.off());
/*
  // Lights 5 6 8 to bright

  // Light 5 6 8 to Sun Hue
  buttonSun.on("press", () =>  lightFiveSun());
  buttonSun.on("press", () =>  lightSixSun());  
  buttonSun.on("press", () =>  lightEightSun()); 
  */

  //potentiometer dimmer
  //sensor.on("change", () =>  hueDim());
  /*
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
*/

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

  function lightFiveBright(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"bri": 254}
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
      json: {"bri": 254}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 254}
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
      json: {"bri": 254}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }
  
  function lightFiveSunHue(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  
  
  function lightSixSunHue(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightSevenSunHue(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightEightSunHue(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightFiveSunSat(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSunSat(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSunSat(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightSunSat(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

//Star light functions

  function lightFiveStarBright(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"bri": 23}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixStarBright(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"bri": 59}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenStarBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 23}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightStarBright(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"bri": 90}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightFiveStarHue(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 38459}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixStarHue(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 44047}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  

  function lightSevenStarHue(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"hue": 55266}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  

  function lightEightStarHue(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 48758}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightFiveStarSat(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"sat": 209}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixStarSat(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"sat": 195}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenStarSat(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"sat": 101}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightStarSat(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"sat": 175}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

//Spring Blossom light functions

  function lightFiveSpringBright(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSpringBright(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSpringBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSpringBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightSpringBright(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightFiveSpringHue(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 56029}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSpringHue(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 44681}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightSevenSpringHue(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"hue": 56029}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightEightSpringHue(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 44077}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightFiveSpringSat(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"sat": 103}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSpringSat(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"sat": 55}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSpringSat(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"sat": 103}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightSpringSat(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"sat": 175}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

});

