var questions = ["Is Iceland always covered in ice?", "What ocean lies east of the United States?"];
var options = ["1) true 2) false", "1) pacific 2) eastern 3) indian 4) atlantic"];
var answers = [2, 4];

var buttons = [];

var currentOption = -1;
var currentQuestion = 0;
var answerText = "";

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  buttons[0] = createButton("1");
  buttons[0].position(10, 300);
  buttons[0].mousePressed(function() {
    currentOption = 1;
  });

  buttons[1] = createButton("2");
  buttons[1].position(40, 300);
  buttons[1].mousePressed(function() {
    currentOption = 2;
  });

  buttons[2] = createButton("3");
  buttons[2].position(70, 300);
  buttons[2].mousePressed(function() {
    currentOption = 3;
  });

  buttons[3] = createButton("4");
  buttons[3].position(100, 300);
  buttons[3].mousePressed(function() {
    currentOption = 4;
  });

}

function draw() {
  // put drawing code here
  background(255);
  text(questions[currentQuestion], 20, 100);
  text(options[currentQuestion], 20, 150);

  text(answerText, 20, 175);


  //if the user pressed a button
  if (currentOption != -1) {
    if (answers[currentQuestion] == currentOption) {
      answerText = "Correct";
      currentQuestion++;
      currentOption = -1;
      if(currentQuestion >= questions.length)
        currentQuestion = 0;
    } else {
      answerText = "Try again.";
    }
  }
}
