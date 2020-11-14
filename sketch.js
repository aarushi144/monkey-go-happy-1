
var monkey , monkey_running
var banana ,banana1, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground 
var score = 0 ;
var survivaltime = 0 ;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banana1= loadImage("banana.png");
obstacle1 = loadImage ("obstacle.png" )
 
}



function setup() {
  monkey = createSprite (200 , 315 , 20 , 20);
  monkey.addAnimation ("moving" , monkey_running );
  monkey.scale = 0.1;
    obstacle = createSprite (400, 330 , 1 , 1 );
   banana = createSprite (80 , 150 , 1  , 1); 
    ground = createSprite (400 , 350 , 900 , 10 )
   ground.velocityX = 4 ;
    ground.x = ground.width / 2 
  foodGroup = new Group ();
  obstacleGroup = new Group ();
}


function draw() {
createCanvas(600 , 400)
  background ("white ")
  if(ground.x > 600) {
  ground.x = ground.width / 4 
  }
   console.log(ground.x)

  
  if (keyDown ("space")  && monkey.y   >    150 ) {    
    monkey.velocityY = - 10       ; 
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide (ground) 
  
 
   food();
  obstacles();
  
if(monkey.isTouching(foodGroup)){
  foodGroup.destroyEach();
  score = score+ 1
    
  }
 
  
  
  drawSprites();
  stroke ("black")
  textSize (20);
  fill ("black");
  survivaltime = Math.ceil (frameCount / frameRate() )
  text ("survival time :" + survivaltime , 100 , 50 );
  
  
   stroke ("white")
  textSize (20);
  fill ("black");
   text ("score :" + score , 500 , 50 );
}


function food (){
  
   if(World.frameCount % 80 === 0 ){
     banana = createSprite (0, 150 , 20 , 20);
    banana.addImage(banana1);
     banana.scale = 0.15;
      banana.velocityX = 3 
      banana.y =random (20 , 80 )      
    
   }
   banana.lifetime = 200
 
  foodGroup.add(banana);
   
}

function obstacles (){
   if(World.frameCount % 200 === 0 ){
         obstacle = createSprite (300 , 330   , 20 , 20);
     obstacle.addImage (obstacle1);
     obstacle.scale = 0.1
     obstacle.velocityX = 3 
obstacle.x = random (  270 , 340 )
   }
   obstacle.lifetime = 200 
     obstacleGroup.add(obstacle )
}



