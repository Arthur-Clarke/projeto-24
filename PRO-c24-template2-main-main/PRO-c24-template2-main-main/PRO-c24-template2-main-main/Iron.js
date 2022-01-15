class Iron{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
		}
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 80;
        this.height = 50;
  
		World.add(world, this.body);

	}
	display()
	{
			var iron=this.body.position;		
			push()
			translate(iron.x, iron.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0,0,this.width, this.height);
			pop()
	}

}