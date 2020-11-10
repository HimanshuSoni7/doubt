
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Ground(600,200,270,20);
	
	bob1=new Bob(500,400,50);
	bob2=new Bob(550,400,50);
	bob3=new Bob(600,400,50);
	bob4=new Bob(650,400,50);
	bob5=new Bob(700,400,50);

	rope1=new Rope(bob1.body,roof.body,-bob1Diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
}



