var movingRec, Rec
var g1,g2,g3,g4

function setup() {
  createCanvas(800,400);
  movingRec = createSprite(400, 200, 50, 50);
  movingRec.shapeColor = ("green")
  Rec = createSprite(600,200,80,30)
  Rec.shapeColor = ("green")

  g1 = createSprite(100,100,50,50)
  g1.shapeColor = ("green")
  g2 = createSprite(200,100,50,50)
  g2.shapeColor = ("green")
  g2.velocityX = 3;
  g2.velocityY = 0;
  g3 = createSprite(300,100,50,50)
  g3.shapeColor = ("green")
  g4 = createSprite(400,100,50,50)
  g4.shapeColor = ("green")
}

function draw() {
  background(255,255,255);  

movingRec.x = World.mouseX
movingRec.y = World.mouseY
if(isTouching(movingRec,g1)){
  movingRec.shapeColor = ("blue")
  g1.shapeColor = ("blue")
}else{
  movingRec.shapeColor = ("green")
  g1.shapeColor = ("green")
}
bounceOff(g2,g3);
 drawSprites();

}

function isTouching(a,b)
{

  if(a.x-b.x <= a.width/2 + b.width/2 && b.x - a.x <= a.width/2 + b.width/2 && 
    a.y-b.y <= a.height/2 + b.height/2 && b.y - a.y <= a.height/2 + b.height/2
    ){
    return true;
  }else{
  return false;
  }

}
function bounceOff(a,b){
if(isTouching(a,b)){
    a.velocityX = -a.velocityX; 
    a.velocityY = -a.velocityY;

}

}

