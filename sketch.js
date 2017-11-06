var x = 0;
var y = 0;
var spacing = 10;
function setup() {
  createCanvas(300, 300);
  background(0);
}

function draw() {
	stroke(255);
	if(random(1) < 0.5) {
		line(x , y , x + spacing, y + spacing);
	}else {
		line(x, y + spacing, x + spacing, y);
	}

	x += spacing;
	if(x > windowWidth) {
		x = 0;	
		y += spacing;
	}
}