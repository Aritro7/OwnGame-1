const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var earth, earthImg, bgImg, SpaceShip, SpaceShipImg, weapon, weaponImg, Alien, A_shipImg;



function preload(){

  //Loading all the image files for the game

  
  bgImg=loadImage("SpaceImg.jpg");
  earthImg=loadAnimation("MovingEarth.gif");
  SpaceShipImg=loadImage("Spaceship.jpg");
  weaponImg=loadImage("laserblast.png");


}

function setup() {
  createCanvas(1280,600);
  
  earth=createSprite(250, 250, 50, 50);
  earth.addAnimation(earthImg);
  

  SpaceShip=createSprite(850, 450, 50, 50);
  SpaceShip.addImage(SpaceShipImg);
  SpaceShip.scale=0.3;
  SpaceShip.velocityX=0;
  
    

}

function draw() {


  background(51);
  image(bgImg, 0, 0, 1730, 900);
  earth.scale=0.75;
  keyPressed();
  Weapon();
  drawSprites();
  
}


function keyPressed(){
  if(keyCode === RIGHT_ARROW && SpaceShip.x>0){
    SpaceShip.x=SpaceShip.x+5;
  }

  if(keyCode ===LEFT_ARROW && SpaceShip.x<1180){
    SpaceShip.x=SpaceShip.x-5;
    
  }
  
  if(keyCode === "s"){
    SpaceShip.x=0;
  }

}


//Still in progress
function Weapon(){
  if(keyCode === UP_ARROW){
    weapon=createSprite(SpaceShip.x, SpaceShip.y, 20, 20);
    weapon.addImage(weaponImg);
    weapon.scale=0.40;
    weapon.velocityY=-4;
  }

}


