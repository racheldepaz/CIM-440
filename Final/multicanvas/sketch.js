$(document).ready(function() {
  flag = 1;
  $("#nex").click(function() {
    if (flag == 0) {
      $("#welcome-layer").css("z-index", "999");
      $("#weather-layer").css("z-index", "9");
      $("#time-layer").css("z-index", "9");
      $("#welcome-layer").css("transform", "translateX(0px) scale(1.5)");
      $("#weather-layer").css("transform", "translateX(-270px) scale(1)");
      $("#time-layer").css("transform", "translateX(270px)");
      flag = 1;
    } else if (flag == 1) {
      $("#time-layer").css("z-index", "999");
      $("#weather-layer").css("z-index", "9");
      $("#welcome-layer").css("z-index", "9");
      $("#time-layer").css("transform", "translateX(0px) scale(1.5)");
      $("#welcome-layer").css("transform", "translateX(-270px) scale(1)");
      $("#weather-layer").css("transform", "translateX(270px)");
      flag = 2;
    } else if (flag == 2) {
      $("#weather-layer").css("z-index", "999");
      $("#time-layer").css("z-index", "9");
      $("#welcome-layer").css("z-index", "9");
      $("#weather-layer").css("transform", "translateX(0px) scale(1.5)");
      $("#time-layer").css("transform", "translateX(-270px) scale(1)");
      $("#welcome-layer").css("transform", "translateX(270px)");
      flag = 0;
    }
  });
  $("#pre").click(function() {
    if (flag == 0) {
      $("#time-layer").css("z-index", "999");
      $("#weather-layer").css("z-index", "9");
      $("#welcome-layer").css("z-index", "9");
      $("#time-layer").css("transform", "translateX(0px) scale(1.5)");
      $("#welcome-layer").css("transform", "translateX(-270px) scale(1)");
      $("#weather-layer").css("transform", "translateX(270px)");
      flag = 2;
    } else if (flag == 1) {
      $("#weather-layer").css("z-index", "999");
      $("#time-layer").css("z-index", "9");
      $("#welcome-layer").css("z-index", "9");
      $("#weather-layer").css("transform", "translateX(0px) scale(1.5)");
      $("#time-layer").css("transform", "translateX(-270px) scale(1)");
      $("#welcome-layer").css("transform", "translateX(270px)");
      flag = 0;
    } else if (flag == 2) {
      $("#welcome-layer").css("z-index", "999");
      $("#weather-layer").css("z-index", "9");
      $("#time-layer").css("z-index", "9");
      $("#welcome-layer").css("transform", "translateX(0px) scale(1.5)");
      $("#weather-layer").css("transform", "translateX(-270px) scale(1)");
      $("#time-layer").css("transform", "translateX(270px)");
      flag = 1;
    }
  });
});

//WEATHER
var weather = function(p) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("weather-layer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};
var myp5 = new p5(weather, 'weather-layer');

//WELCOME
var welcome = function(p) { // p could be any variable name
  var x = 0;
  var y = 720;
  var c = 0;
  let fontReg;
  p.preload = function() {
    fontReg = p.loadFont('Gidole-Regular.otf');
  }
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("welcome-layer");
  };

  p.draw = function() {
    c++;
    if(c == 1000)
    { x = 0; y = 720; }
    p.textFont(fontReg);
    //  p.clear();
    p.fill("white");
    p.rect(0, 0, 720, 480);

    if (x != 720 / 3)
      x++;
    if (y != 400)
      y--;
    //p.fill("black")
    //p.rect(20, 20, 680, 440);
    p.textSize(90);
    p.fill(0, 102, 153);
    p.text('Welcome, ', x, 480 / 3);
    p.text('User', y, 480 / 2);

    p.textSize(20);
    p.fill(0, 0, 0, 50);
    p.text('swipe to see your day', 500, 480 - 480 / 5);
    console.log("x " + x + " y" + y);
  };
};
var myp5 = new p5(welcome, 'welcome-layer');

//TIME
var time = function(p) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("time-layer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};
var myp5 = new p5(time, 'time-layer');
