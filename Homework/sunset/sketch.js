var cloudCounter = 0;
var cloudScale = 50;
var cloudPosX = 50;
var cloudPosY = 50;
const Y_AXIS = 1;


//Reference image
function setup() {
  let yellow = color(255, 204, 0);
  // put setup code here
  createCanvas(windowWidth, windowHeight); //create canvas the size of user's browser

  topSky = color(107, 0, 89);
  bottomSky = color(217, 145, 13);
  waterColor = color(113, 191, 201);
  setGradient(0, 0, windowWidth, windowHeight, topSky, bottomSky, Y_AXIS);

  noStroke();
  fill(waterColor);
  rect(0, windowHeight - windowHeight / 5, windowWidth, windowHeight / 5);

  fill(yellow);

  arc(windowWidth / 2, windowHeight - windowHeight / 5, windowWidth / 2, windowHeight / 5, PI, 2 * PI); //draw the sun

  line(windowWidth / 2, 20, 20);
}

//randomly generate clouds
function drawCloud() {
  fill("white");

  //the top row of cloud fluff
  ellipse(cloudPosX, cloudPosY, cloudScale, cloudScale);
  ellipse(cloudPosX + 40, cloudPosY - 5, cloudScale, cloudScale);
  ellipse(cloudPosX + 70, cloudPosY - 5, cloudScale, cloudScale);

  //the bottom row of cloud fluff
  ellipse(cloudPosX + 70, cloudPosY + 25, cloudScale, cloudScale);
  ellipse(cloudPosX + 25, cloudPosY + 25, cloudScale, cloudScale);
  ellipse(cloudPosX + 95, cloudPosY + 10, cloudScale, cloudScale);

  cloudPosX = 50;
  cloudPosY = 50;
}

function randomCloud() {
  if (cloudCounter <= 5) {
    cloudPosX += random(-50, windowWidth);
    cloudPosY += random(-50, windowHeight / 2.5);
    cloudCounter++;
    drawCloud();
  }
}


function draw() {
  randomCloud();
}


//I used the p5 reference for this method.
//(x,y) where the gradient begins
//(w,h) how wide and high the gradient is
//topC - top color , botC - bottom color
function setGradient(x, y, w, h, topC, botC) {
  noFill();
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(topC, botC, inter); //lerping means that you gradually go from one color to next
    stroke(c);
    line(x, i, x + w, i);
  }
}
