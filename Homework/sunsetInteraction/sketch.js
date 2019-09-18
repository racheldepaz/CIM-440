var cloudCounter = 0;
var cloudPosX = 50;
var cloudPosY = 50;
const Y_AXIS = 1;

function setup() {
  let yellow = color(255, 204, 0);
  // put setup code here
  createCanvas(windowWidth, windowHeight); //create canvas the size of user's browser

  //randomly generate sunset colors
  //if it's sunset (by button press), make the sunset sky
  topSky = color(random(90, 120), 0, random(45, 90));
  bottomSky = color(random(180, 220), random(100, 150), 13);
  waterColor = color(113, 191, 201);
  setGradient(0, 0, windowWidth, windowHeight, topSky, bottomSky, Y_AXIS);


  noStroke();
  //draw water
  fill(waterColor);
  rect(0, windowHeight - windowHeight / 5, windowWidth, windowHeight / 5);

  //draw sun
  fill(yellow);
  arc(windowWidth / 2, windowHeight - windowHeight / 5, windowWidth / 2, windowHeight / 5, PI, 2 * PI); //draw the sun
  line(windowWidth / 2, 20, 20);
}

//randomly generate clouds
function drawCloud() {
  //the value subtracted to the RGB value
  // to create variance in cloud color
  var cloudModifier = random(0, 66);
  let cloudC = color(255 - cloudModifier, 255 - cloudModifier, 255 - cloudModifier);
  fill(cloudC);

  //how  big the clouds are
  var cloudScale = random(50, 75);

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
  cloudPosX += random(-50, windowWidth);
  cloudPosY += random(-50, windowHeight / 2.5);
  cloudCounter++;
  drawCloud();

}


function draw() {
  console.log(mouseX + ", " + mouseY);
  console.log(windowHeight - windowHeight / 5);

  //moving the mouse in the x direction changes the color of the water
  if (mouseY < windowHeight - windowHeight / 5) {
    waterColor = color(113 - (mouseX / 100), 191, 201);
    fill(waterColor);
    rect(0, windowHeight - windowHeight / 5, windowWidth, windowHeight / 5);
  }
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

//type the number of clouds you want to draw
function keyPressed() {
  for (let i = 0; i < key; i++)
    randomCloud();

  console.log("key: " + key);

  if(key == "c")
  //clear
}
