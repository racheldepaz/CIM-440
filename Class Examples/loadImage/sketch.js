//This is a complete shitpost
//randomly spawns the puppy image completely distorted and prints out multicolored text

var puppyImage;

let dogWords = ["wow", "much doge", "very nice", "puppy"];
var index;
var drawCount;

//use to set load media
function preload() {
   puppyImage = loadImage("puppy.jpeg");
}

function setup() {
  //background("pink");

  createCanvas(windowWidth, windowHeight);
  drawCount = 0;
  //image(puppyImage, 30, 100);
  //image
}

function draw() {
  //only divide proportionally
  drawCount++;
  image(puppyImage, random(0, windowWidth), random(0, windowHeight), puppyImage.width/random(1, 10), puppyImage.height/random(1, 10));

  //if(drawCount %2 == 0 ) {
  var index = int(random(0, dogWords.length));

  textSize(int(random(32, 50)));
  fill(random(0, 255), random(0, 255), random(0, 255));
  //text('word', 10, 30);
  text(dogWords[index], random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
  //fill(0, 102, 153);
//}
}
