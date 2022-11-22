// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine;
var boxes = [];
var world;

var ground;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    var options = {
        isStatic: true,
        friction: 0,
    }

    ground = Bodies.rectangle(200, height - 50, width, 100, options);
    Composite.add(world, ground);
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
    background(24);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke(255);
    fill(170);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 100);
}
