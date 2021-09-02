var boyimg, boy;
var gameState = "wait";


//var timeDelay=0;
//var randTime=0;
var count = 0;
function preload() {

  waitimg=loadImage("level1.gif")
  boyknifeimg = loadAnimation(
    "knife.png",
    "KNIFE2.png",
    "KNIFE3.png",
    "KNIFE4.png",
    "KNIFE6.png"
  );



  boyjetpackimg = loadAnimation("JETPACK1.png", "JETPACK2.png", "JETPACK3.png");
  boygunimg = loadAnimation("GUN1.png", "GUN2.png", "GUN3.png");
  jetpackimg = loadImage("JETPACKICON.png");
  knifeimg = loadImage("KNIFEICON.png");
  gunimg = loadImage("GUNICON.png");
  boyimg = loadAnimation(
    "RUNNING1.png",
    "RUNNING2.png",
    "RUNNING3.png",
    "RUNNING4.png",
    "RUNNING5.png",
    "RUNNING6.png",
    "RUNNING7.png"
  );
  bg = loadImage("bg3.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  boy = createSprite(windowWidth / 8, 100);
  boy.addAnimation("running", boyimg);
  boy.addAnimation("boyjetpack", boyjetpackimg);
  boy.addAnimation("boyknife", boyknifeimg);
  boy.addAnimation("boygun", boygunimg);
  boy.setCollider("circle", 0, 0, 30);
//boy.visible=false

  jetpack = createSprite(windowWidth/1.2, 500);
  jetpack.addImage(jetpackimg);
  jetpack.setCollider("circle", 0, 0, 40);
//jetpack.visible=false

  knife = createSprite(windowWidth/2, 100);
  knife.addImage(knifeimg);
  knife.setCollider("circle", 0, 0, 40);
//knife.visible=false

  gun = createSprite(windowWidth/6, 100);
  gun.addImage(gunimg);
  gun.setCollider("circle", 0, 0, 40);
//gun.visible=false

  about = createSprite(100, 100, 50, 50);
  story = createSprite(100, 200, 50, 50);
  forward = createSprite(windowWidth - 100, 100, 50, 50);
  backward = createSprite(windowWidth - 100, 200, 50, 50);
  startButton = createSprite(windowWidth / 2, windowHeight / 2, 50, 20);
  startButton.shapeColor = "white";
  randPosX = Math.round(random(windowWidth - 100, windowHeight - 100));
  randPosY = Math.round(random(windowWidth - 100, windowHeight - 100));
  randPosX2 = Math.round(random(windowWidth - 100, windowHeight - 100));
  randPosY2 = Math.round(random(windowWidth - 100, windowHeight - 100));
  randPosX3 = Math.round(random(windowWidth - 100, windowHeight - 100));
  randPosY3 = Math.round(random(windowWidth - 100, windowHeight - 100));



  reactionTimeButton = createSprite(randPosX, randPosY, 100, 100);
  reactionTimeButton2 = createSprite(randPosX2, randPosY2, 100, 100);
  //reactionTimeButton2.visible=false;
  reactionTimeButton3 = createSprite(randPosX3, randPosY3, 100, 100);
  reactionTimeButton3.visible=false;
}

function draw() {
  background("black");
 /*if(gameState==="wait"){
   background("pink")
   boy.visible=true
   gun.visible=true
   knife.visible=true
   jetpack.visible=true
  //  gun.addImage(gunimg)
  }*/


if (boy.isTouching(gun)) {
    boy.changeAnimation("boygun", boygunimg);
    reactionTimeButton2.visible=true;
  } else if(boy.isTouching(knife)&&reactionTimeButton.visible===true){
    boy.velocityX = 0;
    text("YOU LOSE", windowWidth/2, windowHeight/2)
  }

  if (boy.isTouching(knife)&& reactionTimeButton2.visible==false) {
    boy.changeAnimation("boyknife", boyknifeimg);
    boyimg.velocityX = 10
    reactionTimeButton.visible=true;
  } else if(boy.isTouching(knife)&&reactionTimeButton2.visible===true){
    boy.velocityX = 0;
    text("YOU LOSE", windowWidth/2, windowHeight/2)
  }

  if (boy.isTouching(jetpack)&&reactionTimeButton3==false) {
    boy.changeAnimation("boyjetpack", boyjetpackimg);
    text("YOU WIN!", 800, 600)
    text("REACTION TIME IN FRAMECOUNT" + count/3, 800, 800)

  }
  if (mousePressedOver(startButton)) {
    startButton.visible = false;
    reactionTimeButton.visible = true;
    boy.velocityX = 8;

  }
  if ((reactionTimeButton.visible === true || reactionTimeButton2.visible === true || reactionTimeButton3.visible === true)) {
    count = count + 1;
  }
  if (mousePressedOver(reactionTimeButton)) {
    reactionTimeButton.visible = false;
  }
  if (mousePressedOver(reactionTimeButton2)) {
    reactionTimeButton2.visible = false;
  }
  if (mousePressedOver(reactionTimeButton3)) {
    reactionTimeButton2.visible = false;
  }
//if(boy.isTouching())
  drawSprites();
}
