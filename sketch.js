
//to create  variables for  sprites 
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup ; 
var suvivalTime = 0;

function preload(){
  //to load images and animation 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
 //creating the ground
  ground = createSprite(400,350,700,40);
  ground.velocityX = -6;
  console.log(ground.x)
  ground.shapeColor = "green";
  
    //to create the monkey 
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  monkey.velocityY = 3;
}


function draw() {
  background("white")
   
    
  //to extend the ground 
    ground.x = ground.width /2;
  
  
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
           monkey.velocityY = -12;
    
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.9
   
    //to collide the monkey with the ground
    monkey.collide(ground);

    //to call the functions insde the draw function 
    food();
    obstacle();

    //to declare the groups here 
    bananaGroup = new Group();
    obstacleGroup = new Group();
  
    //to display the score 
    stroke("white");
    textSize(20);
    fill("white");
    text("score"+score,500,50);
    
    //to display the survival time of the monkey 
    stroke("white");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount/frameRate())
    text("Survival Time :  " + survivalTime , 100,50);
  drawSprites();
}
//to create the food funtion 
function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(160,200,10,40);
    banana.velocityX = -3;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.lifetime =  300;
    bananaGroup.add(banana);
    banana.depth  = monkey.depth;
    monkey.depth = monkey.depth +1;
  }

}
//to create the obstacles
function obstacle(){
  if(frameCount % 300 === 0){
 var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -3;
    obstacle.addImage(obstacleImage);
    obstacle .scale = 0.15;
    obstacle.lifetime =  300;
  
    obstacleGroup.add(obstacle);
  }

}






