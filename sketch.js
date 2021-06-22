var ding,dong;
 var wall1,wall2,wall3,wall4;
 var finishline;
 var Score=0;

function setup() {
  
  createCanvas(1200,600)
  finishline=createSprite()
  wall1=createSprite(200,200,400,10);
  wall1.shapeColor="purple";
  wall2=createSprite(900,200,700,10);
  wall2.shapeColor="purple";
  wall3=createSprite(550,320,10,300);
  wall3.shapeColor="purple";
  wall4=createSprite(400,320,10,300);
  wall4.shapeColor="purple";
  ding=createSprite(300,300,20,20);
  dong=createSprite(150,150,20,20);
  ding.shapeColor="red";
dong.shapeColor="black";
ding.velocityX=-2;
ding.velocityY=2;

}

function draw() {

  background("blue");  
  if(dong.isTouching(ding)){
    dong.x=150;
    dong.y=150;

  }
  if(dong.isTouching(wall1)){
    dong.x=150;
    dong.y=150;
  }
  if(dong.isTouching(wall2)){
    dong.x=150;
    dong.y=150;
  }
  if(dong.isTouching(wall3)){
    dong.x=150;
    dong.y=150;
  }
  if(dong.isTouching(wall4)){
    dong.x=150;
    dong.y=150;
  }
  if(keyDown("UP_ARROW")){
    dong.y=dong.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    dong.y=dong.y+5;
  }
  if(keyDown("RIGHT_ARROW")){
    dong.x=dong.x+5;
  }
  if(keyDown("LEFT_ARROW")){
    dong.x=dong.x-5;
  }
 

drawSprites();
}