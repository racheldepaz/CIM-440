var weather;

function setup() {
loadJSON('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bf1f3e93443e1d0df538e182402c98c3', gotData)

}

function gotData(data) {
  weather = data;
}

function draw() {
if(weather){

}
}
