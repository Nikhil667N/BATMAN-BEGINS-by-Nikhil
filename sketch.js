const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        // Write for loop for creating drops
for(var i=0; i<maxDrops;i++)
{
    drops.push(new createDrop(random(0,400),random(0,400)))
}
    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thumder.addImage(thumder1);
            break;
            case 2:  thumder.addImage(thumder2); 
            break; 
            case 3:  thumder.addImage(thumder3);
            break;
            case 4:  thumder.addImage(thumder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops using for loop
    for(var i=0; i<maxDrops; i++)
    {
drops[i].showDrop();
drops[i].updateY();
    }

    drawSprites();
}   

