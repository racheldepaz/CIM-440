let backColors = ["red", "orange", "yellow", "green", "blue", "pink"]
var i = 0;
var scaleMultiplier = 25;

var person = {name: "Rachel", age: 19, number: 1}


function setup() {
  // put setup code here

  //sets the size of canvas
  createCanvas(windowWidth,windowHeight);

  //sets the color of the background
  background("pink");

  fill(backColors[i]);
  stroke(255,255,255);
  ellipse(windowWidth/2.0, windowHeight/2.0, 50, 50);

//debugging stuff
//  console.log("Width: " + windowWidth);
//  console.log("Height: " + windowHeight);
}

//if the mouse is clicked, this method will execute
function mouseClicked()
{
  if (i >= 6) //run through 6 elements in the array of colors. using this because i cant figure out how to use for loops in js
   i = 0;
  //debuging stuff
  //console.log("mouse clicked. i = " + i);
  background(backColors[i]);

  fill(backColors[i]);
  stroke(255,255,255);
  ellipse(windowWidth/2.0,windowHeight/2.0, 50, 50);

  i++;
}

function draw()
{

}
