var table;
var cokeimg;
var sandwichimg;
var paperimg;
var sliderDays;

function preload() {
  table = loadTable('data/5d_forecast.csv', 'csv', 'header');
  cokeimg = loadImage('data/coke can.png');
  paperimg = loadImage('data/crumpled paper.png');
  sandwichimg = loadImage('data/half sandwich.png');
}

function setup() {
  frameRate(15);
  createCanvas(1280, 720);
  
  days = table.getRowCount();
  //print(days);
  
  sliderDays = createSlider(0, days - 1, 0, 1);
  sliderDays.position(50, 650);
  sliderDays.size(1175);
}

function draw() {
  var speedofwind = table.getColumn('wind speed');
  var dates = table.getColumn('day');
  var times = table.getColumn('time');

  var i = sliderDays.value();

  if (speedofwind[i] < 7) 
    image(paperimg, 0, 0);
  else if (speedofwind[i] > 7 && speedofwind[i] < 10)
    image(cokeimg, 0, 0);
  else if (speedofwind[i] > 10)
    image(sandwichimg, 0, 0);
    
  fill("#888888");
  textFont('Helvetica');
  textSize(44);
  text("What can", 50, 170);
  text("the behavior", 50, 220);
  text("of trash objects", 50, 270);
  text("tell us about", 50, 320);
  text("the wind?", 50, 370);

  fill('#333333');
  textFont('Helvetica');
  textSize(24);
  text(dates[i] + " at " + times[i], 50, 620);
  
  textFont('Helvetica');
  fill('red');
  textSize(14);
  text("WINDSPEED (M/S)", 960, 165);
  fill('#333333');
  textSize(100);
  text(speedofwind[i], 950, 250);
}
