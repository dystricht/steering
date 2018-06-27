class Vehicle{
  constructor(x, y, mSpeed = 6, mForce = 0.1){
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.pos = createVector(x, y);
    this.rad = 6;
    this.maxSpeed = mSpeed;
    this.maxForce = mForce;
    //this.desired;
    this.steer;
    //this.color = createVector(r, g, b);

  }

  seek(target){
    let desired = p5.Vector.sub(target, this.pos);

    desired.normalize();
    desired.mult(this.maxSpeed);

    this.steer = p5.Vector.sub(desired, this.vel);
    this.steer.limit(this.maxForce);
    //testFunc();
    //applyForce(steer);

  }

  testFunc(){
    console.log("haha");
  }

  applyForce(f){
    this.acc.add(f);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show(){
    fill(255);
    //stroke(255);
    ellipse(this.pos.x, this.pos.y, this.rad);
  }
}
