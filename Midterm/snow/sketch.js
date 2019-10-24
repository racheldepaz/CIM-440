//using snowflake example: https://p5js.org/examples/simulate-snowflakes.html


//Credit for snowman.fbx: Snowman by Jakers_H : https://poly.google.com/view/crZrU-sG1er
//Credit for snowytrees.gltf: Snowy Trees by Daniel Melchior: https://poly.google.com/view/4yANmlVa-5p

let capture;
let snowflakes = []; //snowflake array
var button;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //fill(1,1,1);
  //song = loadSound('holidaymusic.mp3'); //load song
  //song.play();
  capture = createCapture(VIDEO);
  capture.size(480, 480);
  capture.hide();

  button = createButton('GO TO MODELS');
  button.position(0,0);
  button.size(100,100);
  button.mousePressed(goto);
  background(1,1,1);
}

function goto() {
  window.open("http://racheldepaz.github.io/creative-coding/MagicLeap/hello-prismatic/index.html");
}

function draw() {
  clear();
  //translate(-width / 2, -height / 2, 0);
  image(capture, 0, 0, width, width * capture.height / capture.width);

  noStroke();
  fill(242, 247, 247); //snoflake color
  // background(255);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(5, 10);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    push();
    translate(this.posX, this.posY, 100);
    sphere(this.size);
    pop();
  };
}
