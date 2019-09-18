// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22

var puppy, dinosaur, sloth;
var currentAnimal;
var pButton, dButton, sButton;
var index = 0; //current image
var lastIndex = 0; //last tracked index

function preload() {
  //load media
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  sloth = loadImage("images/sloth.jpg");
}

function setup() {
  // put setup code here
  createCanvas(600, 600);

  pButton = createButton("Puppy");
  pButton.mousePressed(function() {
    index = 0;
  });

  dButton = createButton("Dinosaur");
  dButton.mousePressed(function() {
    index = 1;
  });

  sButton = createButton("Sloth");
  sButton.mousePressed(function() {
    index = 2;
  })
}

function shitPostText(yeet) {
  textSize(int(random(32, 50)));
  fill(random(0, 255), random(0, 255), random(0, 255));
  text(yeet, random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));

  noStroke();
  fill("white");
  rect(0, 0, currentAnimal.width / 4 + 5, currentAnimal.height / 4 + 5);
}

function draw() {
  // put drawing code here

  //if you just switched your picture, clean the canvas
  if (lastIndex != index)
    background("white");

  console.log("Current image: " + index);

  if (index == 0) {
    currentAnimal = puppy;

    shitPostText("puppy");
  } else if (index == 1) {
    shitPostText("dino");
    currentAnimal = dinosaur;
  } else {
    shitPostText("sloth");
    currentAnimal = sloth;
  }
  image(currentAnimal, 0, 0, currentAnimal.width / 4, currentAnimal.height / 4);

  lastIndex = index;
}
