var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxrightSPRITE,boxleftSPRITE,boxbaseSPRITE;
var packageBody,ground,boxLEFT, boxRIGHT, boxBOTTOM
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxposition, boxY;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxleftSPRITE = createSprite(width/2-100,610,20,100);
	boxleftSPRITE.shapeColor = "red"
	boxrightSPRITE = createSprite(width/2+100,610,20,100);
	boxrightSPRITE.shapeColor = "red"
	boxbaseSPRITE = createSprite(width/2,650,200,20);
	boxbaseSPRITE.shapeColor = "red"
	boxLEFT = Bodies.rectangle(width/2-80,610,20,100,{
	isStatic:true
	})
	World.add(world,boxLEFT)
	boxRIGHT = Bodies.rectangle(width/2+80,610,20,100,{
	isStatic:true
	})
	World.add(world,boxRIGHT)
	boxBASE = Bodies.rectangle(width/2,635,200,20,{
	isStatic:true
	})
	World.add(world,boxBASE)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic( packageBody, false);
    
  }
}



