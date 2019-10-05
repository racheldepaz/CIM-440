var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(220);
  image(capture, 0, 0);
  ellipse(width/2, height/2, 150, 150);
}

function mousePressed() {
}
