function setup() {
  // put setup code here

  var eyeWidth = windowWidth / 10;
  var eyeHeight = windowHeight / 10;
  var winWidth = 1250;
  var winHeight = 900;

  createCanvas(winWidth, winHeight); 
  let topColor = color(233, 255, 201);
  //let botColor = color(255, 247, 186);
  //createGradient(0, 0, windowWidth, windowHeight, topColor, botColor);
  background(topColor);


  //draw eye
  noStroke();
  fill("white");
  ellipse(windowWidth / 2 - eyeWidth, windowHeight / 2 - windowHeight / 5, eyeWidth * 2, eyeHeight * 2); //left white of eyes
  ellipse(windowWidth / 2 + eyeWidth, windowHeight / 2 - windowHeight / 5, eyeWidth * 2, eyeHeight * 2); //right white of eyes


  fill("black");

  ellipse(windowWidth / 2 - eyeWidth, windowHeight / 2 - windowHeight / 5, eyeWidth, eyeHeight); //left eye
  ellipse(windowWidth / 2 + eyeWidth, windowHeight / 2 - windowHeight / 5, eyeWidth, eyeHeight); //right eye
  ellipse(windowWidth / 2, windowHeight / 2 - windowHeight / 10, eyeWidth / 5, eyeHeight / 5); //nose


  fill("white");
  ellipse(windowWidth / 2 - eyeWidth/1.5, windowHeight / 2 - windowHeight / 4.4, eyeWidth /4, eyeHeight /4); //left white of eyes sparkle

  fill("black");
  arc(windowWidth / 2, windowHeight - windowHeight / 2, windowWidth / 3.3, windowHeight / 5, 2 * PI, PI); //draw mouth

  let red = color(212, 45, 30);
  fill(red);
  arc(windowWidth / 2 + windowWidth / 10, windowHeight - windowHeight / 2, windowWidth / 10, windowHeight / 5, 2 * PI, PI); //tongue

  let tongueLine = color(192, 45, 30);
  stroke(25);
  stroke(tongueLine);
  line(windowWidth / 2 + windowWidth / 10, windowHeight - windowHeight / 2, windowWidth / 2 + windowWidth / 10, windowHeight - windowHeight / 2 + windowHeight / 10);

}
