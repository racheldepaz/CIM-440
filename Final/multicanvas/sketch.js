$(document).ready(function(){
   flag=1;
    $("#nex").click(function(){
       if(flag==0)
        {
            $("#welcome-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("transform","translateX(0px) scale(1.5)");
            $("#weather-layer").css("transform","translateX(-270px) scale(1)");
            $("#time-layer").css("transform","translateX(270px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#time-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#time-layer").css("transform","translateX(0px) scale(1.5)");
            $("#welcome-layer").css("transform","translateX(-270px) scale(1)");
            $("#weather-layer").css("transform","translateX(270px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#weather-layer").css("z-index","999");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#weather-layer").css("transform","translateX(0px) scale(1.5)");
            $("#time-layer").css("transform","translateX(-270px) scale(1)");
            $("#welcome-layer").css("transform","translateX(270px)");
            flag=0;
        }
    });
    $("#pre").click(function(){
       if(flag==0)
        {
            $("#time-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#time-layer").css("transform","translateX(0px) scale(1.5)");
            $("#welcome-layer").css("transform","translateX(-270px) scale(1)");
            $("#weather-layer").css("transform","translateX(270px)");
            flag=2;
        }
        else if(flag==1)
        {
            $("#weather-layer").css("z-index","999");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("z-index","9");
            $("#weather-layer").css("transform","translateX(0px) scale(1.5)");
            $("#time-layer").css("transform","translateX(-270px) scale(1)");
            $("#welcome-layer").css("transform","translateX(270px)");
            flag=0;
        }
        else if(flag==2)
        {
            $("#welcome-layer").css("z-index","999");
            $("#weather-layer").css("z-index","9");
            $("#time-layer").css("z-index","9");
            $("#welcome-layer").css("transform","translateX(0px) scale(1.5)");
            $("#weather-layer").css("transform","translateX(-270px) scale(1)");
            $("#time-layer").css("transform","translateX(270px)");
            flag=1;
        }
    });
});

//WEATHER
var weather = function( p ) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("weather-layer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(weather, 'weather-layer');

//WELCOME
var welcome = function( p ) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("welcome-layer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(welcome, 'welcome-layer');

//TIME
var time = function( p ) { // p could be any variable name
  var x = 100;
  var y = 100;
  p.setup = function() {
    var cnv = p.createCanvas(720, 480);
    cnv.parent("time-layer");
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(time, 'time-layer');
