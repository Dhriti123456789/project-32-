const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var stand;

var box1,box2,box3,box4,box5,box6,box7;

var box8,box9,box10,box11,box12;

var box13,box14,box15;

var box16;

var polyimg;
var polygon;
var slingshot;

var Score=0;

function preload(){
    polyimg = loadImage("polygon.png");
    
}

function setup(){
   var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(400,700,800,10);
    stand = new ground(400,600,300,20);

    // level 1
    
    box1 = new block(330,580);
    box2 = new block(360,580);
    box3 = new block(390,580);
    box4 = new block(410,580);
    box5 = new block(440,580);
    box6 = new block(470,580);
    box7 = new block(500,580);

    // level 2 
    
    box8 = new block(360,530);
    box9 = new block(390,530);
    box10 = new block(410,530);
    box11 = new block(440,530);
    box12 = new block(470,530);

    // level 3
    box13 = new block(390,500);
    box14 = new block(410,500);
    box15 = new block(440,500);

    // level top
    box16 = new block(410,470);

    // making polygon
    polygon = Bodies.circle(50,200,40);
    World.add(world,polygon)
   

    slingshot = new slingShot(this.polygon,{x:100,y:200});

}


function draw(){
    background("green");
    Engine.update(engine);
      
      stroke("black");
      fill("black")
    text("Score : "+ Score ,500,40);

    ground1.display();
    stand.display();

    fill("blue");
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();

    fill("yellow")
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();

    fill("pink");
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();

    fill("orange");
    box16.display();
    box16.score();

    imageMode(CENTER);
    image(polyimg,polygon.position.x,polygon.position.y,40,40);
   // polyimg.scale(1);
    
    slingshot.display();

  
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
