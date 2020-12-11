
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box, box2;
var engine, world, paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	
	
  //Create the Bodies Here.
 paper = new PaperClass(50,660,20)
 var goptions={
   isStatic:true
 }
 ground=Bodies.rectangle(400,690,800,20,goptions)
 World.add(world,ground)

 var boptions={
   isStatic:true
 }
 box=Bodies.rectangle(500,630,20,100,boptions)
 World.add(world,box)
 
 box2=Bodies.rectangle(700,630,20,100,boptions)
 World.add(world,box2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  rect(box.position.x,box.position.y,20,100)
  rect(box2.position.x,box2.position.y,20,100)
  rect(ground.position.x,ground.position.y,800,20)


 
}
function keyPressed() {
     if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});

  }
}

