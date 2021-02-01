var soldier;
var enemy;

var soldier1_img;

var backimg;
var bg;

var soldier1;

var bact;

var shootingsold;
var bullet;

var bulletimg;
var ground;

var bulletsGroup;

var virusGroup;

var crouchingimg;

var score = 0;
function preload(){

  bact=loadImage("images/bact1.png");

   shootingsold=loadImage("images/shooting.png");

   bulletimg=loadImage("images/bullet.png");

  soldier1=loadImage("images/standing.png");

  crouchingimg=loadImage("images/c4.png");

 soldier1_img=loadAnimation("images/1.png","images/2.png");
 
backimg=loadImage("images/backgroundimg.jpg");
 
 

}

function setup() {
  createCanvas(1000, 600);

  bg=createSprite(900,250,1500,600);
bg.addImage("background",backimg);
bg.scale=2;
bg.velocityX=-6
bg.x=bg.width/2;

ground=createSprite(700,570,2000,20);
ground.visible=false;

bulletsGroup=createGroup();
virusGroup=createGroup();

soldier=createSprite(100,500,10,10);
soldier.addImage("soldier",soldier1);
soldier.scale=0.3;

    
}
 


function draw() {


  createEdgeSprites();
  soldier.collide(ground);


  
if(bg.x<0){
  bg.x= bg.width/2;
}

if(bulletsGroup.isTouching(virusGroup)){
  virusGroup.destroyEach();
  bulletsGroup.destroyEach();
  score=score+1;
}
  if(keyDown("RIGHT_ARROW")){
    soldier.addAnimation("soldier",soldier1_img);
    soldier.velocityX=5;
  }

  if(keyDown("DOWN_ARROW")){
    soldier.addImage("soldier",crouchingimg);
    soldier.scale=0.3;
  }

  if(keyDown("s")){
    soldier.addImage("soldier",shootingsold);
    soldier.velocityX=0;

    createBullet();
    bullet.x=soldier.x+80;
  }

  if(keyDown(UP_ARROW)&& soldier.y>257){
  soldier.velocityY=-10;
soldier.addImage("soldier",soldier1)
  }
 
  
  soldier.velocityY= soldier.velocityY+0.8;
  
  createVirus();

  drawSprites();


  text("Score:"+score ,900,30);



   }

function createBullet(){


  bullet=createSprite(140,454,10,10);
  bullet.addImage("bullet",bulletimg);
  bullet.scale=0.3;
  bullet.velocityX=5;


bullet.y=soldier.y-26;  

  bullet.x=soldier.x+80;


  bulletsGroup.add(bullet);
}
function createVirus(){
  if(World.frameCount%200===0){
    bacti=createSprite(900,450,10,10);
    bacti.addImage("bacti",bact);
    bacti.scale=0.1
    bacti.velocityX=-5;

  virusGroup.add(bacti);
  }
}
  



