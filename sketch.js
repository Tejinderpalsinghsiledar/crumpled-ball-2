
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box ;
var ground1;
var ball ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.)
box1 = new Box(660,580,20,200)
box2= new Box(500,580,20,200)
box3=new Box(585,660,170,20)
ground1 = new ground(400,680,800,10)
ball = new Ball(200,200,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
box1.display();
box2.display();
box3.display();

ground1.display();
ball.display();


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


