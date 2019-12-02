function setup() {
  //loadJSON('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bf1f3e93443e1d0df538e182402c98c3', gotData)
  var myCanvas = createCanvas(720, 480);
  myCanvas.parent("weather-layer");

}

function draw() {
  console.log("w- " + width + " h- " + height);
  fill("pink");
  rect(0, , 300, 100);

  triangle(0, 0, 20, 20, 50, 50);

  rect(150, 150, 100, 100);
}
