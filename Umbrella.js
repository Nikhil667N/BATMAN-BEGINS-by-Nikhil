class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //Write code to load the images
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    //Write the display function
    display()
    {
        var pos=this.umbrella.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y+70,300,300)
    }
}