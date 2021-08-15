var bg;
var multi, multiImg;
var single, singleImg;
var quiz, quizImg;
var logo, logoImg;
var turtle, turtleImg;
var turtle1Img, turtle2Img;
var turtle1, turtle2
var sound1,soundon,soundoff;
var soundonImg,soundoffImg,soundstatus="on";

function preload(){
bg=loadImage("images/bg.jpg")
singleImg=loadImage("images/singleplayer.png")
multiImg=loadImage("images/multiplayer.png") 
quizImg=loadImage("images/quiz.jpg")
logoImg=loadImage("images/logo.png")
turtleImg=loadImage("images/turtle.gif")
turtle1Img = loadImage("images/turtle1.png")
turtle2Img = loadImage("images/turtle2.png")
sound1 = loadSound("sea.mp3");

soundonImg = loadImage("images/soundon.png");
soundoffImg = loadImage("images/soundoff.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  logo=createSprite(displayWidth/2,displayHeight/4,20,20)
  logo.addImage("logo", logoImg)
  logo.scale=0.5

  turtle1=createSprite(200,450,20,20)
  turtle1.addImage("turtle1", turtle1Img)
  turtle1.scale=0.4

  turtle2=createSprite(1200,250,20,20)
  turtle2.addImage("turtle1", turtle2Img)
  turtle2.scale=0.6
 // turtle=createSprite(mouseX, mouseY ,20,20)
 // turtle.addImage("turtle",turtleImg)
 // turtle.scale=0.2;

 soundon = createSprite(80,height-185,300,200);
soundon.addImage(soundonImg);
soundon.scale=0.1; 

soundoff = createSprite(181,height-75,300,200);
soundoff.addImage(soundoffImg);
soundoff.scale=0.1; 
soundoff.visible =false;



  }

function draw() {
  background(bg);  

 // turtle.x=mouseX;
 // turtle.y=mouseY;

 if(mousePressedOver(soundon))
 {
   soundstatus = "off";
   soundoff.visible = true;
   soundon.visible = false;
   sound1.stop();
  }


 if(mousePressedOver(soundoff))
 {
   soundstatus = "on";
   soundoff.visible = false;
   soundon.visible = true;
 
 }

 if(soundstatus==="on")
 {
   sound1.play();

 } 
 drawSprites();
}