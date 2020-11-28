var towerImage,tower;
var climber,climberImage;
var door,doorImage;
var ghost,ghostImage;
var doorGroup,climberGroup;
var spooky,spookySound;
var gameState="play"
var invisibleBlock,invisibleBlockGroup;

function preload(){
towerImage=loadImage("tower.png") ;
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");
spookySound=loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
tower = createSprite(300,300);
tower. addImage("tower",towerImage);
  tower.velocityY=1;
  
doorGroup=new Group();
climberGroup=new Group();
invisibleBlockGroup=new Group();

  ghost=createSprite(300,310)
ghost.addImage("ghost",ghostImage);
ghost.scale=0.3;

 
  
  
  spookySound.loop();
}

function draw (){
if(gameState==="play"){
  if(tower.y>400){
tower.y=300
  
  
}
  spawnDoors();
  if(keyDown("left_arrow")){
ghost.x=ghost.x -3;

}
  if(keyDown("right_arrow")){
ghost.x=ghost.x +3;

} 
   if(keyDown("space")){
ghost.velocityY=-3;

}
  
ghost.velocityY=ghost.velocityY+0.8
  
  
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;  
  }
if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
 
  
  
  
  ghost.destroy();
  gameState="end"
}
  



}
   drawSprites();
  if(gameState==="end"){
    stroke("red");
    fill("red");
    textSize(30);
text("Game Over",300,300)
  
  }
  
 
}
function spawnDoors(){
if(frameCount%200===0){
 door= createSprite(200,-40)
  door.addImage("door",doorImage)
 climber= createSprite(200,10)
climber.addImage("climber",climberImage)
  invisibleBlock=createSprite(200,15)
 invisibleBlock.width=climber.width;
  invisibleBlock.height=2;
  door.x=Math.round(random(128,400))
  climber.x=door.x
  invisibleBlock.x=door.x;
  door.velocityY=1
 climber.velocityY=1;
  invisibleBlock.velocityY=1;
  door.lifetime=680;
  climber.lifetime=680;
  invisibleBlock.lifetime=680;
  doorGroup.add(door)
 climberGroup.add(climber);
invisibleBlockGroup.add(invisibleBlock);
ghost.depth=door.depth+1

}
  
  
  
  
  
  
}
















