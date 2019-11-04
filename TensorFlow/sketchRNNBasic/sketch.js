console.log('ml5 version:', ml5.version);

//based off coding train example Coding Challenge #128
let model;
let strokepath;

// When the model is loaded
function modelReady() {
  console.log("SketchRNN Model Loaded!");
  model.reset(); //reset
  model.generate(gotSketch); //new stroke
  }

  function gotSketch(error, result) {
    // Do something with the result
    if (error) {
      console.error(error);
    } else {
      strokepath = result;
      console.log(strokepath);
    }
  }

  function setup() {
    createCanvas(400, 400);
    model = ml5.sketchRNN("cat", modelReady); //create a new sketch rnn instance
  }

  function draw() {
    background(220);
  }
