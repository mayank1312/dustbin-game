
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,paper,dustbinImage,dust
function preload()
{
	dust=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;
  dustbinImage=createSprite(1290,480,160,200);
  dustbinImage.addImage(dust);
  dustbinImage.scale=0.6;
  
	
     ground = new Dustbin(width/2,600,width,20)
	 dustbin1 = new Dustbin(1290,580,180,20);
	 dustbin2 = new Dustbin(1200,480,20,200);
	 dustbin3 = new Dustbin(1380,480,20,200);
     paper = new Paper(100,300,70,70)
     line = new Dustbin(1395,height/2,10,height)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine);
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 paper.display();
 ground.display2();
 line.display2();
 keyPressed();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.paper,paper.paper.position,{x:5,y:-7})
  }


}


