var pointX = 0;
var pointY = 0;

var canvasWidth = 500;
var canvasHeight = 500;

var faceColor = "blue";
var following = true;

var colorButton;

function setup() {
  // put setup code here
  createCanvas(canvasWidth, canvasHeight);
  pointX = width / 2;
  pointY = height / 2;

  //creates an html tag for a button. does not need to be rendered at 60fps
  colorButton = createButton("Click to change color.");
  colorButton.position(20, 20);
  colorButton.mousePressed(function() {

    faceColor = "pink";

  });
}

function draw() {
  // put drawing code here
  background(255);

  if (mouseX > canvasWidth / 2) {
    console.log("Currently on right hand side");
    background("brown");
  }
  else if (mouseX == canvasWidth / 2) {
    console.log("center");
    background("blue");
  } else {
    console.log("Currently on left hand side");
    background("grey");
  }


  if (following) {
    pointX = mouseX;
    pointY = mouseY;
    fill(faceColor);
    rect(pointX - 100, pointY - 100, 200, 200);
    fill(255);
    ellipse(pointX, pointY, 10, 10);
    ellipse(pointX + 20, pointY - 20, 30, 30);
    ellipse(pointX - 20, pointY - 20, 30, 30);

    // arc(x,y,width,height,start,end)
    arc(pointX, pointY + 10, 50, 50, 0, PI);

    //ellipse(point2, point2, 10,10);
  } else {
    fill(faceColor);
    rect(pointX - 100, pointY - 100, 200, 200);
    fill(255);
    ellipse(pointX, pointY, 10, 10);
    ellipse(pointX + 20, pointY - 20, 30, 30);
    ellipse(pointX - 20, pointY - 20, 30, 30);

    // arc(x,y,width,height,start,end)
    arc(pointX, pointY + 10, 50, 50, 0, PI);
  }
} //end of draw



function mousePressed() {
  //faceColor = "red";
}


function mouseReleased() {
  //faceColor = "blue";
}

function keyPressed() {
  console.log("key : " + key + " key code " + keyCode);

  /*switch (key) {
    case "q":
      faceColor = "white";
      break;
    case "a":
      faceColor = "yellow";
      break;
    case " ":
      following = !following;
  }*/
  if (key == "w") {
    faceColor = "black";
  }
  if (key == " ") {
    following = !following;
  }

}
