var player;
var jet1;
var jet2;
var china1;
var china2;
var china3;
var china4;
var cloud;
var bulletsGroup;
var bullets;
var bulletImg;
var gameState = 0;
var button1;
var message1;
var score = 0;
var distance = 0;
var message2;
var button;
var backImg;
var button3,message3;
var bunker1,bunker2,bunker3,bunker4;
var jet3;

function preload(){
  jet1 = loadImage("images/jet 1.png");
  jet2 = loadImage("images/jet2.png");
  cloud = loadImage("images/clouds.png");
  bulletImg = loadImage("images/rocket.jpg");
  backImg = loadImage("images/background.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
    message1 = createElement('h2');
    message1.html("We have given you a mission that - Some chinese planes have entered our  border and flying there since 30 minutes and you have to find them and destroy their planes before the enter China.");
    message1.position(displayWidth/90,displayHeight/10);

    button1 = createButton("Start Mission");
    button1.position(displayWidth/2.5,displayWidth/8);

    message2 = createElement('h2');
    message2.html("Start new mission");
    message2.position(displayWidth/2.3,displayHeight/2);

    button2 = createButton("Start");
    button2.position(displayWidth/2,displayHeight/1.7);

    message3 = createElement('h2');
    message3.html("Start new mission");
    message3.position(displayWidth/2.3,displayHeight/2);

    button3 = createButton("Start");
    button3.position(displayWidth/2,displayHeight/1.7);

  console.log(gameState);
  
  bulletsGroup = createGroup();
  
  player = createSprite(displayWidth/2,displayHeight/2-1000,1,1);
  player.addImage("player",jet1);

  china1 = createSprite(random(displayWidth/2-300,displayWidth/2+300),displayHeight-1500,50);
  china1.addImage("china1",jet2);
  china1.scale = 0.4;

  china2 = createSprite(random(displayWidth/2-300,displayWidth/2+300),displayHeight-2500,50,50);
  china2.addImage("china2",jet2);
  china2.scale = 0.4;

  china3 = createSprite(random(displayWidth/2-300,displayWidth/2+300),displayHeight-3500,50,50);
  china3.addImage("china3",jet2);
  china3.scale = 0.4;

  china4 = createSprite(random(displayWidth/2-300,displayWidth/2+300),displayHeight-4500,50,50);
  china4.addImage("china4",jet2);
  china4.scale = 0.4;
}

function draw() {

  if(gameState === 0){
    button1.mousePressed(function(){
      gameState = 1;
    })
  };

  if(gameState === 0 || gameState === 2){
    background(backImg);
  }

  message2.hide();
  button2.hide();

  message3.hide();
  button3.hide();

  if(gameState === 1){
    button1.hide();
    message1.hide();
  }

  if(gameState === 1){
  background("blue");  
  
  if(gameState === 1){
    image(cloud, 0,-displayHeight*14,displayWidth, displayHeight*15);
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
  }

  if(keyDown(UP_ARROW)){
    player.y = player.y-15;
    distance = distance+1;
    score = score+1;
  }

  if(keyDown("space")){
    bullets = new Bullet;
  }

  if(bulletsGroup.isTouching(china1)){
    china1.destroy();
    bulletsGroup.destroyEach();
    score = score+100;
  }

  if(bulletsGroup.isTouching(china2)){
    china2.destroy();
    bulletsGroup.destroyEach();
    score = score+100;
  }

  if(bulletsGroup.isTouching(china3)){
    china3.destroy();
    bulletsGroup.destroyEach();
    score = score+100;
  }

  if(bulletsGroup.isTouching(china4)){
    china4.destroy();
    bulletsGroup.destroyEach();
    score = score+100;
  }

  camera.y = player.y-220;

  china1.velocityY = -8;
  china2.velocityY = -8;
  china3.velocityY = -8;
  china4.velocityY = -8;
}

 /* if(distance > 620 && score > 1000){
    gameState = 2;
    player.destroy();
    background(255);
    textSize(20);
    fill(0);
    text("YOU WIN!! SURGICAL STRIKE SUCCESSFUL",displayWidth/3,player.y-350);
  }*/

  if(distance > 620 ){
    if(score > 1000){
      gameState = 2;   
      player.destroy();
      textSize(20);
      //console.log(gameStates);
      fill(0);
     // text("YOU WIN!! SURGICAL STRIKE SUCCESSFUL",displayWidth/3,player.y-350);
    }

    else{
      player.destroy();
      textSize(20);
      fill(0);
      //text("YOU LOSE!! THEY ENTERED CHINA",displayWidth/3,player.y-350);
      china1.destroy();
      china2.destroy();
      china3.destroy();
      china4.destroy();
      gameState = 0;
    }
  }

  if(gameState === 2){
    console.log(gameState);
    button3 = createButton("button");
    button3.position(displayWidth/2,displayHeight/2);

    button3.mousePressed(function(){
      gameState = gameState+1;
      console.log(gameState);
    });
  }

  if(gameState === 3){
    console.log(gameState);
    console.log("hello");
    text("hello",displayWidth/2, displayHeight/3);
  }
  /*if(distance > 620 && score < 1000){
    player.destroy();
    background(255);
    textSize(20);
    fill(0);
    text("YOU LOSE!! THEY ENTERED CHINA",displayWidth/3,player.y-350);
    china1.destroy();
    china2.destroy();
    china3.destroy();
    china4.destroy();
  };*/

    /*if(mousePressed(button2)){
      gameState = 3;
      console.log(gameState);
    };

  if(gameState === 3){
    button2.hide();
    message2.hide();

    button3.show();
    message3.show();
  }*/

  textSize(20);
  fill(0);
  text("SCORE:"+score,displayWidth/1.5,player.y-550);

  drawSprites();
}