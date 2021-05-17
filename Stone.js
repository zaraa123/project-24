class Stone{
	constructor(x,y,width,height){
	
	// assign options to the rubber ball
	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	};
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke('black')
    fill('black')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
