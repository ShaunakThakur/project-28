class Stone{
    constructor(x,y){
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
            'isStatic': false
        }
        this.body = Bodies.rectangle(x, y, options);
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,50, 560);
        pop();
    }
}