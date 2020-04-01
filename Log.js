class Log{
    constructor(x,y,width,height,angle)
    {
        var options={
            'restitution' : 0.8,
            'friction' : 0.5,
            'density' : 0.5,
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
        this.width=width;
        this.height=height;

    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        //stroke("blue");
        //fill("pink");
        rect(0,0,this.width,this.height);
        pop();
    }

}