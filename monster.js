class Monster{
    constructor(x,y,w,l){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 30
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.l=l;
        this.image=loadImage("monster.jpeg")
        this.body=Bodies.rectangle(x,y,w,l,options)
        World.add(world, this.body);
    }
    display(){
        var mPos = this.body.position;
        push();
        translate(mPos.x,mPos.y);
        fill("blue");
        ellipseMode(CENTER);
        image(this.image, 20,-130,this.w*3, this.l*3)
        pop();
    }
}