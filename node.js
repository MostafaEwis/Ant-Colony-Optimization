class Node{
	static diamter = 50;
	static outer = Node.diamter * 1.4;
	constructor(x, y, index){
		this.pos = {x, y};
		this.index = index;
		this.lines = [];
	}
	draw(){
		strokeWeight(3);
		stroke("purple");
		this.lines.forEach(ln => {
			//x2 and y2 only exist if you the line has been drawn
			if(ln.x2 && ln.y2){
				line(ln.x1, ln.y1, ln.x2, ln.y2);
			}else{
				line(ln.x1, ln.y1, mouseX, mouseY);
			}
		})
		noStroke();
		fill("purple");
		circle(this.pos.x, this.pos.y, Node.outer);
		fill("white");
		circle(this.pos.x, this.pos.y, Node.diamter);
	}
}
