class Block{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:20,
            friction:1
        }
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var p=this.body.position;
        var a=this.body.angle;
        push();
        translate(p.x,p.y);
        rotate(a);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}