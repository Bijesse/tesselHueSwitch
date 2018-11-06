var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var led = new five.Led("b2");
  var led1 = new five.Led("b3");
  var led2 = new five.Led("b4");
  var led3 = new five.Led("b5");

  var button = new five.Button("a2");
/*
  button.on("press", () => led.on());
  button.on("press", () => led1.on());
  button.on("press", () => led2.on());
  button.on("press", () => led3.on());
  button.on("release", () => led.off());
*/

  button.on("press", () =>  console.log('one'));
  button.on("press", () =>  console.log('2'));
  button.on("press", () =>  console.log('3'));
  button.on("press", () => console.log('4'));
  button.on("press", () => console.log('5'));
  button.on("press", () => console.log('6'));
  button.on("press", () => console.log('7'));
  button.on("press", () => console.log('8'));
  button.on("press", () => console.log('9'));
  button.on("press", () => console.log('10'));

  
  button.on("release", () => console.log('eleven'));
  button.on("release", () => console.log('12'));
  button.on("release", () => console.log('13'));
  button.on("release", () => console.log('14'));
  button.on("release", () => console.log('15'));
  button.on("release", () => console.log('16'));
  button.on("release", () => console.log('17'));
  button.on("release", () => console.log('18'));
  button.on("release", () => console.log('19'));
  button.on("release", () => console.log('20'));

});