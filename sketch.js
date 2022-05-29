
var PLAY = 1
var END =0
var gameState = PLAY;

var score
var apple2,apple3,mango2,mango3,water2,water3,papple2,papple3,banana3,banana2

var garden,apple,mango,redL,apple1,papple,fbg,mango1,water,water1,papple,papple1,banana,banana1,mode,fn,pla,boom1,boom;
var blade,position,blade1
var carrotImg,redImg
var fruitgroup,boomgroup


function preload(){
  gardenImg = loadImage("bjj.jpg");
  appleImg = loadImage("apple.png");
  mangoImg = loadImage("image_prev_ui.png");
  watermealonImage = loadImage("water.png")
  pappleImg = loadImage("papple.png")
  papple0img = loadImage("papple.0.png")
  bananaImg = loadImage("banana.png")
  banana0img = loadImage("banana0.png")
  bladeImg = loadImage("blade.png")
 // blade1Img = loadImage("blade1.png")
  modeImg = loadImage("mode.png")
  fruitImg = loadImage("ninja.webp")
  plaImage = loadImage("text.png")
  boomImg = loadImage("boom.png")
  fbgimg = loadImage("fbg.jpg")
  apple2img = loadImage("apple1.png")
  apple3img = loadImage("apple2.png")
  mango2img = loadImage("mango1.png")
  mango3img = loadImage("mango2.png")
  water2img =loadImage("water2.png")
  water3img=loadImage("water1.png")
  papple2img=loadImage("papple2.0.png")
  papple3img = loadImage("papple1.png")
  banana2img = loadImage("banana2.png")
  banana3img = loadImage("banana2.0.png")
 

}


function setup(){
  
  createCanvas(windowWidth, windowHeight);


  fbg = createSprite(windowWidth/2,windowHeight/2)
fbg.addImage(fbgimg)
fbg.scale=1.5
// Moving background
garden=createSprite(windowWidth/2,windowHeight/2);
garden.addImage(gardenImg);
garden.scale=6


apple = createSprite(0,0,20,20)
apple.scale=0.12

apple2 = createSprite(0,0,20,20)
apple2.scale=0.000008
apple2.addImage(apple2img)

apple3 = createSprite(0,0,20,20)
apple3.scale=0.000008
apple3.addImage(apple3img)

mango = createSprite(0,0,20,20)
mango.scale=0.2

mango2 = createSprite(0,0,20,20)
mango2.addImage(mango2img)
mango2.scale=0.00009

apple1 = createSprite(0,0,20,20)
apple1.scale=0.12

mango1 = createSprite(0,0,20,20)
mango1.scale=0.2

mango3 = createSprite(0,0,10,10)
mango3.addImage(mango3img)
mango3.scale=0.00008

water = createSprite(0,0,20,20)
water.scale=0.2

water2 = createSprite(0,0,10,10)
water2.scale=0.00009
water2.addImage(water2img)

boom = createSprite(0,0,20,20)
boom.scale=0.25

boom1 = createSprite(0,0,20,20)
boom1.scale=0.25

water1 = createSprite(0,0,20,20)
water1.scale=0.2

water3 = createSprite(0,0,20,20)
water3.scale=0.0009
water3.addImage(water3img)

papple = createSprite(0,0,20,20)
papple.scale=0.25

papple2 = createSprite(0,0,20,20)
papple2.addImage(papple2img)
papple2.scale=0.0009

papple1 = createSprite(0,0,20,20)
papple1.scale=0.25

papple3 = createSprite(0,0,20,20)
papple3.addImage(papple3img)
papple3.scale=0.000009


banana = createSprite(0,0,20,20)
banana.scale=0.25

banana2 = createSprite(0,0,20,20)
banana2.addImage(banana2img)
banana2.scale=0.00009

banana1 = createSprite(0,0,20,20)
banana1.scale=0.25

banana3 = createSprite(0,0,20,20)
banana3.addImage(banana3img)
banana3.scale=0.25

//blade1 = createSprite(0,0,20,20)
//blade1.scale=0.150

mode = createSprite(windowWidth/8,windowHeight/2,20,20)
mode.addImage(modeImg)
mode.scale=0.5

blade = createSprite(0,0,80,80)
blade.addImage(bladeImg)
blade.scale=0.150

pla = createSprite(windowWidth/2,windowHeight/10,20,20)
pla.background="black"
pla.addImage(plaImage)
pla.scale=0.9993

if(World.frameCount%10===0){
fn = createSprite(windowWidth/2,windowHeight/2)
fn.addImage(fruitImg)
fn.scale=1.5
fn.lifetime = 200;
}

//knife = createSprite(windowWidth/2,windowHeight/6,width,20)
//knife.color="blue"


fruitgroup = createGroup()
boomgroup = createGroup()

score = 0
}

function draw() {
  background(0);


 // if(apple.y>160){
   // apple.velocityY=-12
 // }
//blade.visible=false
blade.y=World.mouseY;
blade.x=World.mouseX;

if (gameState===PLAY){
  if(fruitgroup.isTouching(blade)){
    text("Score:",width/10,height/10);
  }
  if(apple1.isTouching(blade)){
    apple1.addImage(apple2img && apple3img)
    apple1.velocityY=apple1.velocityY + 1
    apple2.velocityY=-2
    apple2.velocityX=-7
    score=score+1/10
    apple1.lifetime = 200;
  
  }
   if(apple.isTouching(blade)){
    apple.addImage(apple3img)
    apple.velocityY=apple.velocityY + 1
    apple3.velocityY=-2
    apple3.velocityX=7
    score=score+1/10
    apple.lifetime = 200;
  
  }
  if(mango.isTouching(blade)){
    mango.addImage(mango2img)
    mango.velocityY=mango.velocityY + 1
    mango2.velocityY=-2
    mango2.velocityX=17
    score=score+1/10
    mango.lifetime = 200;
  
  }
  if(mango1.isTouching(blade)){
    mango1.addImage(mango3img)
    mango1.velocityY=mango1.velocityY + 1
    mango3.velocityY=-2
    mango3.velocityX=-7
    score=score+1/10
    mango1.lifetime = 200;
  
  }
  if(water.isTouching(blade)){
    water.addImage(water2img)
    water.velocityY=water.velocityY + 1
    water.scale=0.2
    water2.velocityY=-2
    water2.velocityX=7
    score=score+1/10
  
    water.lifetime = 200;
  
  }
  if(water1.isTouching(blade)){
    water1.addImage(water3img)
    water1.velocityY=water1.velocityY + 1
    water1.scale=0.2
    water3.velocityY=-2
    water3.velocityX=-7
    score=score+1/10
  
    water3.lifetime = 200;
  
  } 
  if(papple.isTouching(blade)){
    papple.addImage(papple3img)
    papple.velocityY=papple.velocityY + 1
    papple3.velocityY=-2
    papple3.velocityX=-7
    score=score+1/10
  
    papple3.lifetime = 200;
  
  }
  if(papple1.isTouching(blade)){
    papple1.addImage(papple2img)
    papple1.velocityY=papple1.velocityY + 1
    papple2.velocityY=-2
    papple2.velocityX=-7
    score=score+1/10
  
    papple2.lifetime = 200;
  
  }
  if(banana.isTouching(blade)){
    banana.addImage(banana3img)
    banana.velocityY=banana.velocityY + 1
    banana3.velocityY=-2
    banana3.velocityX=-7
    score=score+1/10
  
    banana3.lifetime = 200;
  
  }
  if(banana1.isTouching(blade)){
    banana1.addImage(banana2img)
    banana1.velocityY=banana1.velocityY + 1
    banana2.velocityY=-2
    banana2.velocityX=7
    score=score+1/10
  
    banana2.lifetime = 200;
  
  }
  apple.velocityY=apple.velocityY + 0.20
  mango.velocityY=mango.velocityY + 0.20
  mango1.velocityY=mango1.velocityY + 0.20
  apple1.velocityY=apple1.velocityY + 0.20
  water.velocityY=water.velocityY + 0.20
  water1.velocityY=water1.velocityY + 0.20
  papple.velocityY=papple.velocityY + 0.20
  papple1.velocityY=papple1.velocityY + 0.20
  banana.velocityY=banana.velocityY + 0.20
  banana1.velocityY=banana1.velocityY + 0.20
  boom.velocityY=boom.velocityY + 0.20
  boom1.velocityY=boom1.velocityY + 0.20
   
 
  // bladeA()
   //boomC()
   boomB()
   createApples()
  createMango()
  createRed()
  createYellow()
  createWater()
  createGreen()
  createPineapple()
  createOrange()
  createBanana()
  createBonono()
}

  if(mousePressedOver(mode)) {
    gameState=PLAY
    mode.destroy()
    pla.destroy()
    garden.destroy()
    //make a invisible wall to make move mouse
    //blade.visible=true

  }
 
 
 //add gravity      //adddgravityaddgravityaddgravityaddgiatuhfdkghsigjkhjkfhaksfhjkashfuihskjdjgfhuiahsg


 if(boomgroup.isTouching(blade)){
  //trex.velocityY = -12;
  gameState = END
} 
else if(gameState==END){
  fruitgroup.destroyEach()
  boomgroup.destroyEach()
}


   drawSprites();
score.visible=false

   text("Score: "+ score,width/1.1,height/10);
   

}

function createApples() {
  if(World.frameCount%150===0){
 apple.y=height
 

// apple.gravity=4
// apple.gravitySpeed=0.5

apple.addImage(appleImg);
apple.x = Math.round(random(width,-15));
apple.velocityY = -14;
apple.velocityX= -2
apple.lifetime = 200;

fruitgroup.add(apple)
  
}
}

function createMango() {
  if(World.frameCount%190===40){
    mango.y=height
    
  
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   mango.addImage(mangoImg);
   mango.x = Math.round(random(width+50,-10));
   mango.velocityY = -14;
   mango.velocityX= 2
   mango.lifetime = 200;

   fruitgroup.add(mango)
  }
}

function createYellow() {
  if(World.frameCount%150===20){
    mango1.y=height
    
  
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   mango1.addImage(mangoImg);
   mango1.x = Math.round(random(width+95,-10));
   mango1.velocityY = -14;
   mango1.velocityX= -2
   mango1.lifetime = 200;

   fruitgroup.add(mango1)
  }
}

function createRed() {
  if(World.frameCount%200===15){
    apple1.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   apple1.addImage(appleImg);
   apple1.x = Math.round(random(width+95,-15));
   apple1.velocityY = -14;
   apple1.velocityX= 2
   apple1.lifetime = 220;

   fruitgroup.add(apple1)
     
   }
}

function createWater() {
  if(World.frameCount%150===35){
    water.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   water.addImage(watermealonImage);
   water.x = Math.round(random(width+95,-10));
   water.velocityY = -14;
   water.velocityX= 2
   water.lifetime = 200;

   fruitgroup.add(water)
     
   }
}

function createGreen() {
  if(World.frameCount%200===0){
    water1.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   water1.addImage(watermealonImage);
   water1.x = Math.round(random(width+95,-15));
   water1.velocityY = -14;
   water1.velocityX= -2
   water1.lifetime = 200;

   fruitgroup.add(water1)
     
   }
}

function createPineapple() {
  if(World.frameCount%180===55){
    papple.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   papple.addImage(pappleImg);
   papple.x = Math.round(random(width+95,-10));
   papple.velocityY = -14;
   papple.velocityX= -2
   papple.lifetime = 200;

   fruitgroup.add(papple)
     
   }
}

function createOrange() {
  if(World.frameCount%150===29){
    papple1.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   papple1.addImage(papple0img);
   papple1.x = Math.round(random(width+95,-15));
   papple1.velocityY = -14;
   papple1.velocityX= 3
   papple1.lifetime = 200;

   fruitgroup.add(papple1)
     
   }
}

function createBanana() {
  if(World.frameCount%150===35){
    banana.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   banana.addImage(banana0img);
   banana.x = Math.round(random(width+95,-10));
   banana.velocityY = -14;
   banana.velocityX= -2
   banana.lifetime = 200;

   fruitgroup.add(banana)
     
   }
}

function createBonono() {
  if(World.frameCount%150===23){
    banana1.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   banana1.addImage(bananaImg);
   banana1.x = Math.round(random(width+95,-10));
   banana1.velocityY = -14;
   banana1.velocityX= 2
   banana1.lifetime = 200;

   fruitgroup.add(banana1)
     
   }
}

function boomB(){

  if(World.frameCount%200===0){
    boom.y=height
    
   
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   boom.addImage(boomImg);
   boom.x = Math.round(random(width+10,-50));
   boom.velocityY = -14;
   boom.velocityX= 3
   boom.lifetime = 250;

   boomgroup.add(boom)
     
   }

//}

//function boomC(){

  if(World.frameCount%180===0){
    boom1.y=height
    
 
   // apple.gravity=4
   // apple.gravitySpeed=0.5
   
   boom1.addImage(boomImg);
   boom1.x = Math.round(random(width+10,-50));
   boom1.velocityY = -14;
   boom1.velocityX= -2
   boom1.lifetime = 250;

   boomgroup.add(boom1)
     
   }

}

function bladeA(){

  fruitgroup.add(apple||apple1||banana||banana1||water||water1||papple||papple1||mango||mango1)

}