class Tree{
    constructor(x,y){
        var options = {
            'restitution':0,
            'friction':1,
            'isStatic': true
        }
      this.body = Bodies.rectangle(x, y, options);
      this.image = loadImage("images/tree.png");
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,940, 390);
        pop();
      };
}
