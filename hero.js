class Hero{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 20
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("superhero.jpeg")
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
    }
    display(){
        var HeroPos = this.body.position;
        push();
        translate(HeroPos.x,HeroPos.y);
        fill("blue");
        ellipseMode(CENTER);
        image(this.image, -50,0,this.r*4, this.r*3)
        pop();
    }
}