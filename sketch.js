
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint
var boy, image
function preload()
{
boy = loadImage("Plucking mangoes/boy.png",40,20)	

	
}

function setup() {
	createCanvas(800, 700);

     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  image(boy,0,0,20,20)
  tree = new Tree(600,600,40,40)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  drawSprites();
 
}



