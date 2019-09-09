function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);


}

function draw() {
  // put drawing code here

  //left eye
  ellipse(100,100,20,20);

  //right eye
  ellipse(140,100,20,20);

  //mouth
  rect(75,150,100,30); //rect starts drawing from left hand corner
  //rect(80, 200, 100, 30);

  strokeWeight(5);
  point(30,27);
  strokeWeight(1);

  line(75, 165, 175, 165);


  //width/2 center point of width, height/2 center point of height

  //console.log("width " + width);
  //console.log("height " + height);

  triangle(width/2, height/2, width/2 + 10, height/2 + 20, width/2 - 10, height/2 + 20);


 fill("yellow");
 stroke(255);
  arc(50, 50, 50, 50, PI, 3*PI/4);

stroke(0);
  fill("white");
}
