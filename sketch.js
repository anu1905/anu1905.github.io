function setup() {
  // put setup code here
  createCanvas(600, 400);
}

function draw() {
  // put drawing code here
  background('#FFFFFF');
  noStroke();
  fill("blue");
  rect(width/2, height/2, 200, 120);
  fill("yellow");
  rect(340, height/2, 20, 120);
  rect(width/2, 240, 200, 20);
  fill("red");
  textSize(20);
  text("Hej hej, love from Sweden", 280, 360);
}