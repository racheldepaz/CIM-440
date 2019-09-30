let myFont;
var index;

function preload() {
  myFont = [loadFont("fonts/antaro.otf"), loadFont("fonts/AnotherDanger-Demo.otf"),
    loadFont("fonts/AnotherDangerSlanted-Demo.otf")
  ];
}

function setup() {
  index = 0;
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  boxes();
}

function mousePressed() {
  myFont[index++];
  clear();
  textStuff();
}

function textStuff() {
  //fill('#ED225D');
  if(index == myFont.size)
  textSize(36);
  textFont(myFont[index]);
  text('p5.js', 10, 50);
}

function boxes() {
  push();
  translate(100, 100, -100);
  rotate(PI / 4, [1, 1, 0]);
  box(2000, 1000, 3000);
  pop();
  push();
  translate(100, 100, -100);
  rotate(PI / 4, [1, 1, 0]);
  box(30, 50, 100)
  pop();
}

function shape() {
  strokeWeight(10);
  stroke("#fae");

  beginShape();
  vertex(100, 23, -100);
  vertex(200, 23, -50);
  vertex(150, 45, -100);
  endShape();
}
