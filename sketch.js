const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;

   
ground1= new Ground(200,400,400,20);
box1= new Box(250,390,20,20);
box2=new Box(300,390,20,20);
log1= new Log(250,370,50,10,PI/2);

console.log(ground1);
//var object_options={
  //isStatic:true
//}


var prop={
  isStatic : true
 
}

 // object = Bodies.rectangle(200,100,50,50,prop);
 // World.add(world,object);
  //console.log(object);
 /* console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
  console.log(object.angle);*/
  
}

function draw() {
  background(255,255,0);  
  Engine.update(engine);  
  rectMode(CENTER);
  //rect(200,200,50,50);
 //rect(object.position.x,object.position.y,50,50);
 box1.display();
 box2.display();
 log1.display();
 ground1.display();
}