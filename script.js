// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine;
var circles = [];
var boundaries = [];
var world;

var ground;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    // Engine.run(engine);

    boundaries.push(new Boundary(600, 50, width*0.6, 25, -0.3))
    boundaries.push(new Boundary(200, 150, width*0.6, 25, 0.3))
    boundaries.push(new Boundary(600, 250, width*0.6, 25, -0.3))
}

function mouseDragged() {
    circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
    background(177);
    Engine.update(engine);


    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
    }

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

}
