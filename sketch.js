const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var hero, monster, bg;
var superhero_image, monster_image, bg_img;
var ground;
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9;
var b10,b11,b12,b13,b14,b15;
var b16,b17,b18,b19;


function preload() {
hero_image = loadImage("superhero.jpeg");
monster_image = loadImage("monster.jpeg");
bg_img = loadImage("bg.jpeg")

}

function setup() {
  createCanvas(1500, 800);
  
  engine = Engine.create();
	world = engine.world;

  ground=new Ground(600,600,1000,20);
  hero=new Hero(200,300,50);
  fly=new Sling(hero.body,{x:200,y:300})
  monster=new Monster(870,415,60,60);


  b1=new Block(500,489,60,60);
  b2=new Block(500,429,60,60);
  b3=new Block(500,369,60,60);
  b4=new Block(500,309,60,60);
  b5=new Block(500,249,60,60);

  b6=new Block(600,489,60,60);
  b7=new Block(600,429,60,60);
  b8=new Block(600,369,60,60);
  b9=new Block(600,309,60,60);

  b10=new Block(700,489,60,60);
  b11=new Block(700,429,60,60);
  b12=new Block(700,369,60,60);
  b13=new Block(700,309,60,60);
  b14=new Block(700,249,60,60);
  b15=new Block(700,189,60,60);

  b16=new Block(800,489,60,60);
  b17=new Block(800,429,60,60);
  b18=new Block(800,369,60,60);
  b19=new Block(800,309,60,60);

  
  Engine.run(engine);
}

function draw() {
  background(bg_img);
  
  ground.display();
  hero.display();
  fly.display();
  monster.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  b16.display();
  b17.display();
  b18.display();
  b19.display();

}
function mouseDragged() {
	Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
  Matter.Body.setStatic(monster.body,false)
  }


 
  

  
