const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var ball
var link

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(6,{x:245,y:60})
  link = new Link(rope,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  var ball_option = {
    density:0.001
  }
  ball = Bodies.circle(300,300,15,ball_option)
    Matter.Composite.add(rope.body,ball)
  
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  ellipse(ball.position.x,ball.position.y,15,15)
  
  Engine.update(engine);
  

 
   
}
