
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;
var score=0;
var END=0;
var PLAY=1;
var gamestate=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(50,350,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
ground=createSprite(200,390,900,25);

 
  
   FoodGroup= new Group();
  obstacleGroup= new Group();
  
  
  
}


function draw() {
background("blue");
  
  if(gamestate===PLAY){
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
     monkey.velocityY = monkey .velocityY + 0.8
    
    
   if(monkey.isTouching(FoodGroup)){
     score=score+1
    FoodGroup.destroyEach();
     }
   spawnObstacles();
  spawnfood();
     
  if(obstacleGroup.isTouching(monkey)){
    gamestate=END;
  } 
    
  }
  
  if(gamestate===END){
  
  
  FoodGroup.velocityX = 0;
     obstacleGroup.velocityX = 0;
     FoodGroup.lifetime=-1;
     obstacleGroup.lifetime=-1; 
    
  }
  
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime "+survivaltime,250,50);
  
  drawSprites();
  
}
function spawnObstacles() {
  if(frameCount % 300 ==  0) {
    var obstacle = createSprite(600,355,10,40);
   obstacle.addImage(obstaceImage);
   obstacle. liftime=300;
   // obstacle.debug = true;
    obstacle.velocityX = -3;
     
  
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
}
}


function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 190  === 0) {
    var food = createSprite(600,320,40,10);
    food.y = Math.round(random(150,250));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
    
    
     //assign lifetime to the variable
    food.lifetime = 200;
  FoodGroup.add(food);
    
  }
}