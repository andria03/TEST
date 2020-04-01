class Box
{
    constructor(x,y,width,height){
        var options={
            restitute : 0.2  
              
           }
           this.body= Bodies.rectangle(x,y,width,height,options);
           World.add(world,this.body);
           this.width=width;
           this.height=height;

    }

    display()
    {
        var pos= this.body.position;
        rectMode(CENTER);
        fill (150);
        rect(pos.x,pos.y,this.width,this.height);
    }
}