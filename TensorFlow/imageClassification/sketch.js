let classifier, userimg, img;
var enabled;
console.log('ml5 version:', ml5.version);

function preload() {
  classifier = ml5.imageClassifier('MobileNet');

  input = createFileInput(handleFile);
  input.position(0, 0);
}

function setup() {
  enabled = true;
  var cnv = createCanvas(windowWidth / 4, windowHeight / 4);

  cnv.id("rachel's amazing canvas");

  var container0 = createDiv();
  container0.id("container0");

  select("#container0").html("<h1>Image Classifier Yay!</h1>");

  select("#container0").style("width", "windowWidth px"); //setting width of container 0
  select("#container0").style("margin", "0 auto"); //center our container

  cnv.parent("#container0");

  select('body').style('background-color', 'grey');

  var container1 = createDiv();
  container1.id("container1");

  var container2 = createDiv();
  container2.id("container2");
}

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);

    select("#container1").html('Label: ' + results[0].label);
    select("#container1").style("width", "windowWidth px");
    select("#container1").style("margin", "0 auto");

    select("#container2").html('Confidence: ' + nf(results[0].confidence, 0, 2));
    select("#container2").style("width", "windowWidth px")
    select("#container2").style("margin", "0 auto");

  }
}

function draw() {
  if (userimg != null && enabled == true) {
    clear();
    enabled = false;
    image(userimg, 0, 0, 400, 400);
    classifier.classify(userimg, gotResult);
  }
}

function handleFile(file) {
  console.log(file);
  enabled = true;
  select("#container1").html('Handling the image...hold on!')
  select("#container2").html('');
  if (file.type == 'image') {
    userimg = createImg(file.data, '');
    userimg.hide();
  } else {
    userimg = null;
  }
}
