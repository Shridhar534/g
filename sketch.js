var hen,henImage,b1,b2,b3,b4,ctrl,back1,back2,back3,back4,back5
var GS1=1,GS2=2,GS3=3
var gameState=1
var lol,atk,box1,box2,box3,box4
var wall1,wall2,wall3,wall4,wall5,wall6,wall11,wall12,wall13
var wall7,wall8,wall9,wall10
var peice1,peice2,peice3,peice4,output,final

function preload(){
  henImage2 = loadImage("img/2.png")
  henImage4 = loadImage("img/4.png")
  henImage1 = loadImage("img/1.png")
  henImage3 = loadImage("img/3.png")
  bgImage1 = loadImage("img/bg1.png")
  bgImage2 = loadImage("img/bg2.png")
  bgImage3 = loadImage("img/bg3.png")
  bgImage4 = loadImage("img/bg4.png")
  bgImage5 = loadImage("img/bg5.png")
  ctrlImg = loadImage("img/control.png")
  peice1_image = loadImage("img/peice1.png")
  peice2_image = loadImage("img/peice2.png")
  peice3_image = loadImage("img/peice3.png")
  peice4_image = loadImage("img/peice4.png")
  output_image = loadImage("img/output.png")
  output_image1 = loadImage("img/part 1.png")
  output_image2 = loadImage("img/part 2.png")
  output_image3 = loadImage("img/part 3.png")
  hen_attack = loadAnimation("img/a1.png","img/a2.png","img/a3.png","img/a4.png")
  attack_img = loadImage("img/attackimage.png")
  final_img = loadImage("img/final.png")
}

function setup(){
  createCanvas(600,600)

//the most important thing//
//beacaouse of this you can play the game on mobile ^-^
  lol = createSprite(300,300,30,30)
  lol.visible=false
 //----------------------------------------//

  b1=createSprite(99,461,25,25)
  b2=createSprite(145,506,25,25)
  b3=createSprite(98,555,25,25)
  b4=createSprite(53,509,25,25)
 //----------------------------------------//
 //barriers        dont get outside of map... :D
  wall1 = createSprite(109,400,300,5) 
  wall2 = createSprite(300,540,600,5)
  wall3 = createSprite(250,200,5,400)
  wall4 = createSprite(337,340,5,380)
  wall5 = createSprite(450,30,600,5)
  wall6 = createSprite(490,150,300,5) 

  wall7=createSprite(300,0,800,5)
  wall7.visible=false
  wall8=createSprite(300,600,800,5)
  wall8.visible=false
  wall9=createSprite(0,300,5,800)
  wall9.visiblr=false
  wall10=createSprite(600,300,5,800)
  wall10.visible=false

  wall11 = createSprite(480,368,300,5)
  wall12 = createSprite(237,183,5,400)
  wall13 = createSprite(427,247,200,5)

  
 //----------------------------------------//
//backgrounds
  back1=createSprite(300,300)
  back1.addImage("back1",bgImage1)
  back1.scale=1.8

  back2=createSprite(300,300)
  back2.addImage("back2",bgImage2)
  back2.scale=0.6
  back2.visible=false

  back3=createSprite(300,300)
  back3.addImage("back3",bgImage3)
  back3.scale=0.6
  back3.visible=false

  back4=createSprite(300,300)
  back4.addImage("back3",bgImage4)
  back4.scale=0.6
  back4.visible=false

  back5=createSprite(300,300)
  back5.addImage("back5",bgImage5)
  back5.scale=0.6
  back5.visible=false
  //----------------------------------------//
  //countroller
  ctrl=createSprite(100,515,10,10)
  ctrl.addImage("ctrl",ctrlImg)
  ctrl.scale=0.3
//-----------------------------------------//
  hen=createSprite(20,500,50,50)
  hen.addImage("hen",henImage2)
  hen.scale=0.2
 //----------------------------------------//
  box1 = createSprite(599,87,50,50)
  box1.visible=false

  box2=createSprite(599,430,50,50)
  box2.visible=false

  box3=createSprite(588,181,50,50)
  box3.visible=false

  box4=createSprite(580,297,20,20)
  box4.visible=false
 //----------------------------------------//

 peice1=createSprite(700,700,50,50)
 peice1.addImage("peice1",peice1_image)
 peice1.scale=0.5

 peice2=createSprite(700,700,50,50)
 peice2.addImage("peice2",peice2_image)
 peice2.scale=0.5

 peice3=createSprite(700,700,50,50)
 peice3.addImage("peice3",peice3_image)
 peice3.scale=0.5

 peice4=createSprite(700,700,50,50)
 peice4.addImage("peice2",peice4_image)
 peice4.scale=0.5

 output = createSprite(100,50)
 output.addImage("output",output_image)
 output.scale=0.5
//--------------------------------------------//
atk=createSprite(465,515)
atk.addImage("atk",attack_img)
atk.scale=0.5
atk.visible=false

}

function draw(){
background("white")
//hen.isStatic=false;

hen.collide(wall7)
hen.collide(wall8)
hen.collide(wall9)
hen.collide(wall10)
hen.collide(wall11)
hen.collide(wall12)
hen.collide(wall12)


if (gameState == GS1){

back1.visible=true
hen.collide(wall1)
hen.collide(wall2)
hen.collide(wall3)
hen.collide(wall4)
hen.collide(wall5)
hen.collide(wall6)
}


//-------------------------------------------------------------------------------------------------------------//
if (hen.isTouching(box1)){
  back1.visible=false 
  back2.visible=true
  hen.x=1
  hen.y=249
  box1.destroy()
  wall6.destroy()
  wall5.destroy()
  wall4.destroy()
  wall3.destroy()
  wall2.destroy()
  wall1.destroy()
  gameState = GS2
  peice1.x=297
  peice1.y=440
  text("use arrow keys if in PC",277,52)
  box1.destroy()

}
//------------------------------------------------------------------------------------------------------------//
if(hen.isTouching(box2)){
  hen.x=8
  hen.y=234
  console.log("lol")
  box2.visible=false
  back3.visible=true
  back2.visible=false
  gameState = GS3
  hen.collide(wall7)
  box2.destroy()
  wall11.destroy()
  wall12.destroy()
  peice2.x=310
  peice2.y=266
  }
 //------------------------------------------------------------------------------------------------------------//



if(hen.isTouching(box3)){
  back3.visible=false
  back4.visible=true
  hen.x=2
  hen.y=292
  box3.destroy()
  peice3.x=331
  peice3.y=168
  box3.destroy()
}

if(hen.isTouching(box4)){
  back5.visible=true
  back4.visible=false
  hen.x=4
  hen.y=354
  peice4.x=159
  peice4.y=185
  box4.destroy()
}


if(hen.isTouching(peice1)){
  peice1.destroy()
  output.addImage("output",output_image1)
}

if(hen.isTouching(peice2)){
  peice2.destroy()
  output.addImage("output",output_image2)
}

if(hen.isTouching(peice3)){
  peice3.destroy()
  output.addImage("output",output_image3)
}

if(hen.isTouching(peice4)){
  peice4.destroy()
  output.addImage("output",final_img)
  atk.visible=true
}
   
if(keyDown("q")){
  console.log(mouseX,mouseY)
}
  
  countroller()
  drawSprites()
}
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//


function countroller(){

  if(keyDown("up_Arrow")){
    hen.position.y=hen.position.y-8
    hen.addImage("hen",henImage2)
    }
  
 if(keyDown("down_Arrow")){
    hen.position.y=hen.position.y+8
    hen.addImage("hen",henImage4)
      }
  
  if(keyDown("right_Arrow")){
    hen.position.x=hen.position.x+8
    hen.addImage("hen",henImage1)
    }    
  if(keyDown("left_Arrow")){
    hen.position.x=hen.position.x-8
    hen.addImage("hen",henImage3)
    }
 //---------------------------------------------------------------------------------------------------------*/
if(mousePressedOver(b1)){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2)
}

if(mousePressedOver(b2)){
  hen.position.x=hen.position.x+8
  hen.addImage("hen",henImage1)
}

if(mousePressedOver(b3)){
  hen.position.y=hen.position.y+8
  hen.addImage("hen",henImage4)
}

if(mousePressedOver(b4)){
  hen.position.x=hen.position.x-8
  hen.addImage("hen",henImage3)
}
//-------------------------------------------------------------------------------------------------------------------------//
/*if(touches.length>0){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2) 
  touches=[]
}*/

lol.x=mouseX
lol.y=mouseY

if(lol.isTouching(b1)){
  hen.position.y=hen.position.y-8
  hen.addImage("hen",henImage2)
}

if(lol.isTouching(b2)){
  hen.position.x=hen.position.x+8
  hen.addImage("hen",henImage1)
}

if(lol.isTouching(b3)){
  hen.position.y=hen.position.y+8
  hen.addImage("hen",henImage4)
}

if(lol.isTouching(b4)){
  hen.position.x=hen.position.x-8
  hen.addImage("hen",henImage3)
}

if(lol.isTouching(atk)){
  hen.addAnimation("hen",hen_attack)
}

if(keyWentDown("space")){
  hen.addAnimation("hen",hen_attack)
}

}
//************************************************countrol function ends here*********************************************//

