
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage,boy;

function preload()
{
	boyImage = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(940,390);

	ground = new Ground(600,700,1200,50);

	mango1 = new Mango(1000,300);
	mango2 = new Mango(850,350);
	mango3 = new Mango(900,200);
	mango4 = new Mango(1000,200);
	mango5 = new Mango(1100,300);

	stone = new Stone();

	boy = createSprite(100,620);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	rope = new Rope(stone.body,{x:150,y:560});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  
  tree.display();

  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();

  stone.display();

  rope.display();

  mouseDragged();
  mouseReleased();
  
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if (distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:50,y:560});
		rope.attach(stone.body);
	}
}