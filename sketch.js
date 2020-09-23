var fixedRect, movingRect;

var rect1,rect2,rect3,rect4,rect5,rect6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;

  movingRect = createSprite(1000, 200, 80, 50);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;

  rect1 = createSprite(100,400,50,50);
  rect1.shapeColor = "gold";
  rect1.debug = true;

  rect2 = createSprite(200,500,50,50);
  rect2.shapeColor = "brown";
  rect2.debug = true;
  rect2.velocityX = 6;

  rect3 = createSprite(500,500,50,50);
  rect3.shapeColor = "purple";
  rect3.debug = true;
  rect3.velocityX = -6;

  rect4 = createSprite(600,700,50,50);
  rect4.shapeColor = "indigo";
  rect4.debug = true;

  rect5 = createSprite(700,300,50,50);
  rect5.shapeColor = "red";
  rect5.debug = true;

  rect6 = createSprite(800,100,50,50);
  rect6.shapeColor = "yellow";
  rect6.debug = true;
}

function draw() {
  background("lightgray");  

  console.log("Fixed Rect x : " +fixedRect.x);
  console.log("Moving Rect x : " +movingRect.x);
  console.log((fixedRect.width/2)+(movingRect.width/2));
  console.log(movingRect.x -  fixedRect.x);
 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,rect6)){
    fixedRect.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  else {
      fixedRect.shapeColor = "orange";
      movingRect.shapeColor = "orange";
  }


  drawSprites();
}

