
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bin1, bin2, bin3 , ground;
function preload()
{
	
}

function setu99desa09ikp() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,550,800,400,options);

	bin1 = new Bin(700,10,options);

	paper = new Paper(100,10,options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bin1.display();
  paper.display();
  drawSprites();
 
}


function mouseDragged(){
    
}


function mouseReleased(){
    
}
