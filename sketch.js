function setup() {
  // put setup code here
  createCanvas(600, 400);
}

function draw() {
  // put drawing code here
  background("green");
  noStroke();
  fill(100);
  ellipse(mouseX,mouseY,40,40);
  fill("red");
  text("Hello World", mouseX, mouseY);
}