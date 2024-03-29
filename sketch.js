const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(230, 200, 40,40);
    box2=new Box(200,300,40,40);
    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);

    ground.display();
    box1.display();
    box2.display();
}