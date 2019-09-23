var hitX = 200,
  hitY = 200,
  hitW = 100,
  hitH = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  rect(hitX, hitY, hitW, hitH);
  if (mouseX < hitX + hitW && mouseX > hitX - hitW &&
    mouseY > hitY - hitH && mouseY < hitY + hitH) {
    fill(0);
    text("YEET", hitX + hitW / 3, hitY + hitH / 3, hitW, hitH);
    fill("pink");
  } else {
    fill(255);
  }


}
