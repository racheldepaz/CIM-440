function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var distX = 100;
  distY = 100;
  console.log(circleHitZone(distX, distY));
  fill("black");
  ellipse(distX, distY, 100, 100);

  fill("grey");
  ellipse(distX, distY, 10, 10);
}

function mousePressed() {
  if (circleHitZone(100, 100) == true) {
    clear();
    text("yeet",200,200,300, 300);
    console.log("yeet pushed");
  }
  else {
    clear();
    text("nah.", 200, 200, 300, 300);
    console.log("nah pushed.");
  }
}

function circleHitZone(distX, distY) {
  var curDist = dist(mouseX, mouseY, distX, distY);
  if (curDist < 10)
    return true;
  else {
    return false;
  }
}
