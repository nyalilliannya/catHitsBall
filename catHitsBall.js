// setup is called once at the start
var yarnX
var yarn=[]
var yarnY
var rightPawX
var rightPawY
function setup() {
  createCanvas(800, 400);
  background("GoldenRod")
  for (var i = 0; i < 4; i+=1) {
   yarn.push({
    y:random(20,300),
    x:-40 
   }) 
  }
  yarnX=100
  yarnY=100
  score=0
  yarnX+=1
}

function draw() {
  rightPawX=mouseX
  rightPawY=mouseY
  
  background("goldenRod")
  text(score,10,10)
  for (var j=0;j<yarn.length;j++){
    yarn[j].x+=5
    yarnX=yarn[j].x
    yarnY=yarn[j].y
    noStroke()
  	fill("red")
 		ellipse(yarnX,yarnY,50,50)
  	if(yarnX>830){
    	yarn[j].x=-30
    	yarn[j].y=random(30,200)
    	score-=1
  }
    if(mouseIsPressed && mouseX > yarnX - 25 && mouseX < yarnX + 25 &&
			mouseY > yarnY - 25 && mouseY < yarnY + 25){
    yarn[j].x = -30
    yarn[j].y=random(30,200)
    score=score+1
  }
  }
    
  fill("white")
  noStroke()
  //base of body ears and head
  ellipse(200,300,150,130)
  triangle(190,300,150,220,130,300)
  triangle(210,300,250,220,270,300)
  ellipse(200,380,70,100)
  //paws and right arm
  ellipse(145,395,30,20)
  ellipse(rightPawX,rightPawY,30,20)
  triangle(rightPawX-8,rightPawY+5,rightPawX+8,rightPawY-5,263,400)
  triangle(rightPawX-5,rightPawY+5,263,400,247,400)
  //eyes
  fill('black')
  ellipse(235,290,30,30)
  ellipse(165,290,30,30)
  fill('white')
  ellipse(230,285,10,10)
  ellipse(160,285,10,10)
  //mouth and nose
  fill('black')
  ellipse(190,325,30,30)
  ellipse(210,325,30,30)
  fill('white')
  ellipse(188,322,29,29)
  ellipse(212,322,29,29)
  fill('black')
  triangle(195,310,205,310,200,320)
  //whiskers
  stroke('black')
  line(190,314,170,311)
  line(190,317,170,317)
  line(190,320,170,323)
  
  line(210,314,230,311)
  line(210,317,230,317)
  line(210,320,230,323)
  if(mouseIsPressed && mouseX > yarnX - 25 && mouseX < yarnX + 25 &&
			mouseY > yarnY - 25 && mouseY < yarnY + 25){
    yarnX = -30
    yarnY=random(30,200)
    score=ascore+1
  }
  
  
}
