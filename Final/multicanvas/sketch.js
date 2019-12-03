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
  let we;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("weather-layer");
    p.loadJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bf1f3e93443e1d0df538e182402c98c3", gotData);
  };

  function gotData(data) {
    we = data;
  }
  p.draw = function() {
    p.background(255);
    if (we) {
      console.log("gottem");
      p.textSize(100);
      p.text(we.main.temp, 100, 100);
    }
    //p.fill("white");
    //p.rect(x, y, 50, 50);
  };
};
var myp5 = new p5(weather, 'weather-layer');

//WELCOME
var welcome = function(p) { // p could be any variable name
  var x = 0;
  var y = 720;
  var c = 0;
  var textCol = 243;
  let fontReg;
  var clouds;

  p.preload = function() {
    fontReg = p.loadFont('Gidole-Regular.otf');
    clouds = p.loadImage('clouds.jpg')
  };

  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("welcome-layer");
  };

  p.draw = function() {
    //  p.image(clouds, 0, 0, clouds.width, clouds.height);
    c++;
    if (c == 1000) {
      x = 0;
      textCol = 243;
      y = 720;
    }
    p.textFont(fontReg);
    //  p.clear();
    p.fill("white");
    p.rect(0, 0, 720, 480);

    if (x != 720 / 4)
      x++;
    if (y != 400)
      y--;
    if (textCol != 146)
      textCol--;
    //p.fill("black")
    //p.rect(20, 20, 680, 440);
    p.textSize(90);
    p.fill(255, textCol, 20);
    p.text('Good Morning, ', x, 480 / 3);
    p.text('Rachel', y, 480 / 2);

    p.textSize(20);
    p.fill("grey");
    p.text('swipe to see your day', 500, 480 - 480 / 5);
  //  console.log("x " + x + " y" + y);
  };
};
var myp5 = new p5(welcome, 'welcome-layer');

//TIME
var time = function(p) { // p could be any variable name
  let c;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("time-layer");
    c = p.color(p.random(0, 255), p.random(0, 255), p.random(0, 255));
  };

  p.draw = function() {
    p.background("white");

    p.textSize(100);
    p.fill("black");

    p.text(p.hour(), 720 / 5, 270);
    p.text(p.minute(), 720 / 5 + 160, 270);
    p.text(p.second(), 720 / 5 + 300, 270);

    if (p.frameCount % 60 == 0) {
      c = p.color(p.random(130, 255), p.random(175, 255), p.random(230, 255));
      p.fill(c);
    }
    p.fill(c);
    p.text(":", 720 / 5 + 125, 270);
    p.text(":", 720 / 5 + 275, 270);
  };
};
var myp5 = new p5(time, 'time-layer');
