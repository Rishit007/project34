const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, ground;
var superHero, rope , monster;

var gameState = "AttachedToRope";

function preload() {
   backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,450,800,100);
 
    box1 = new Box(450,100);
    box2 = new Box(450,100);
    box3 = new Box(450,100);
    box4 = new Box(450,100);
    box5 = new Box(450,100);
    box6 = new Box(450,100);
    
    box7 = new Box(500,100);
    box8 = new Box(500,100);
    box9 = new Box(500,100);
    box10= new Box(500,100);
    box11= new Box(500,100);
	box12= new Box(500,100);
	
	box13= new Box(550,100);
    box14= new Box(550,100);
    box15= new Box(550,100);
    box16= new Box(550,100);
    box17= new Box(550,100);
	box18= new Box(550,100);
	
	box19= new Box(600,100);
    box20= new Box(600,100);
    box21= new Box(600,100);
    box22= new Box(600,100);
    box23= new Box(600,100);
	box24= new Box(600,100);

    superHero = new SuperHero(-375,0,400,150);

	rope = new Rope(superHero.body,{x:200, y:0});
	
	monster = new Monster(700,200);
}

function draw(){
        background(backgroundImg);

    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
	box12.display();
	
	box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
	box18.display();
	
	box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    superHero.display();
 
	rope.display();    
	
	monster.display();
}

function mouseDragged(){
    Matter.Body.setPosition(superHero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  //  rope.fly();
  //  gameState = "launched";
}
