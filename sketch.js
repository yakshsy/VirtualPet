var balloon,background;
function preload(){
  backgroundimg = loadImage("image/1.png")
  balloonimage = loadAnimation("image/2.png");
  
}

function setup() {
  database = fire.database();
  console.log(database);
  createCanvas(500,500);

balloon = createsprite(100,400,20,20);
 balloon.addAnimation("balloon",balloonImage);
 balloon.scale = 0.4;
 
  
}

function draw() {
  background(backgroundima);
  
  if(keydown(LEFT_ARROW)){
    balloon.x = balloon.x -10
  }

  else if(keydown(RIGHT_ARROW)){
    balloon.x = balloon.x +10
  }

  else if(keydown(UP_ARROW)){
    balloon.y = balloon.y -10
  }
    
  else if(keydown(DOWN_ARROW)){
    balloon.y = balloon.y +10
  }
  drawSprites();
}