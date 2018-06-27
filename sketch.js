let v;
const WIDTH = 600;
const HEIGHT = 600;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	v = new Vehicle(WIDTH/4, HEIGHT/4);
}

function draw() {

	mouse = createVector(mouseX, mouseY);
	cfg();

	ellipse(mouseX, mouseY, 50);
	v.seek(mouse);
	v.applyForce(v.steer);
	v.update();
	v.show();
}

function cfg(){
	background(0);
	noFill();
	stroke(255);
	strokeWeight(3);
}
