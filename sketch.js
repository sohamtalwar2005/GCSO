var carobject,speed,weight,wall;
function setup() {
  createCanvas(1600,400);
  carobject =createSprite(50,200,20,20);
  carobject.shapeColor = "white";
  wall = createSprite(1500,200,10,400);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(0,0,0);  
  weight = random(400,1500);
  speed = random(30,95);
  carobject.velocityX = 9;
  if(wall.x - carobject.x < carobject.width/2 + wall.width/2){
    carobject.velocityX = 0;
    if(((0.5*weight*speed*speed)/22500)<100){
      carobject.shapeColor = "green";
    
    }
      if (((0.5*weight*speed*speed)/22500)<180) {
        carobject.shapeColor = "yellow";
      } else {
        carobject.shapeColor = "red";
      }
  }
 
  
  drawSprites();
}