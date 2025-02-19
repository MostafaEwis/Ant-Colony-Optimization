class Graph{
	constructor(){
		this.nodes = [];
		this.lineMode = false;
		this.tempNodeIndex = null;
	}
	addNode(x, y){
		this.nodes.push(new Node(x, y, this.nodes.length))
	}
	removeNode(index){
		this.nodes.splice(index, 1);
	}
	getLength(){
		return this.nodes.length;
	}
	checkNodes(){
		let nodesClicked = this.nodes.filter(node => {
			let distance = dist(node.pos.x, node.pos.y, mouseX, mouseY)
			return distance >= Node.diamter / 2 && distance <= Node.outer / 2;
		});
		console.log(nodesClicked);
		if(!this.lineMode){
			if(nodesClicked.length == 0){
				this.addNode(mouseX, mouseY);
				return;
			}else{
				this.lineMode = true;
				let nodeIndex = nodesClicked[0].index;
				this.tempNodeIndex = nodeIndex;
				this.nodes[nodeIndex].lines.push({x1: this.nodes[nodeIndex].pos.x,
								  y1: this.nodes[nodeIndex].pos.y});
			}
		}else{
			this.lineMode = false;
			if(nodesClicked.length == 0){
				this.nodes[this.tempNodeIndex].lines.pop();
			}else{
				let nodeIndex = nodesClicked[0].index;
				let linesLen = this.nodes[this.tempNodeIndex].lines.length;
				this.nodes[this.tempNodeIndex].lines[linesLen - 1].x2 = this.nodes[nodeIndex].pos.x;
				this.nodes[this.tempNodeIndex].lines[linesLen - 1].y2 = this.nodes[nodeIndex].pos.y;
				this.tempNodeIndex = null;

			}
		}
	}
	draw(){
		push();
		fill(255);
		this.nodes.forEach(node => node.draw());
		pop();
	}
};
