var button1;


function setup() {
  createCanvas(400, 400);

  button1 = new hitZoneObject(100, 100, 50, "pink");
}

function draw() {
  background(255);

console.log("button1 x: " + button1.x);
  button1.display();
  if(mouseX == button1.x)
    button1.hover();
}

class hitZoneObject {
  constructor(tempX, tempY, tempSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.sz = tempSize;
    this.color = tempColor;
  }

  display() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.sz, this.sz);
  }

  hover(){
    noStroke();
    fill("grey");
  }
}
