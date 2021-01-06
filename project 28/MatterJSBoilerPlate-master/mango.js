class Mango{
    constructor(x,y,radius){
        var options = {
            'restitution':0,
            'friction':1,
            'isStatic': true
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.radius = radius;
      this.image = loadImage("images/mango.png");
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER)
        image(this.image,0, 0, this.radius);
        pop();
      };
}
