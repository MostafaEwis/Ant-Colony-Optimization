let graph;
function setup() {
	createCanvas(700, 700);
	graph = new Graph();
}
function draw() {
	background("pink");
	stroke("purple");
	graph.draw();
}
function mouseClicked(){
	graph.checkNodes();
}
