class Sample{
    constructor(Xpos, Ypos, bodyWidth, bodyHeight){
       this.sampleBody = Matter.Bodies.rectangle(Xpos, Ypos, bodyWidth, bodyHeight, {isStatic: true, restitution: 0.45});
       this.width = bodyWidth;
       this.height = bodyHeight;
       this.x = Xpos;
       this.y = Ypos;
       World.add(world, this.sampleBody);
    }
    display(){
        var pos = this.sampleBody.position;
        push();
        rectMode(CENTER);
        stroke("ffffff");
        fill("000000");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}