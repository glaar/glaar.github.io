function Circle(x, y, r) {
  var options = {
    friction: 0.01,
    restitution: 0.4,
  };

  this.body = Bodies.circle(x, y, r, options);
  this.body.r = r;
  Composite.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    ellipse(0, 0, this.body.r * 2);
    pop();
  };
}

// test
