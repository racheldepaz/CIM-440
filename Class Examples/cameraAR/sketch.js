let capture;
var scene;

function setup() {
  createCanvas(390, 240, WEBGL);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  //capture.hide();
}

function draw() {
  background(255);
  var geometry = new THREE.SphereGeometry( 5, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var sphere = new THREE.Mesh( geometry, material );
  scene.add(sphere);
}
