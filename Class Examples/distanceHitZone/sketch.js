var hitX = 100;
var hitY = 100;
var threshold = 20;

var hitDistance;

//hit zone- designated an area that triggers an event
function setup() {
  // put setup code here
  createCanvas(400, 400);
}


function draw() {
circularHitZone();
}


function circularHitZone() {
  ellipse(hitX, hitY, threshold * 2, threshold * 2);
  hitDistance = dist(mouseX, mouseY, hitX, hitY);
  console.log("hit distance: " + hitDistance);

  //hover state
  if (hitDistance <= threshold) {
    fill(127);
    text("click me", hitX, hitY + 30);
  } else {
    fill(255);
  }
}

function mousePressed() {
  //click state
  if (hitDistance <= threshold) {
    fill(127);
    background("pink");
    text("thx bb", hitX, hitY + 50);
  } else {
    fill(255);
    background(255);
  }
}
