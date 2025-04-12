//https://www.youtube.com/watch?v=FlyAZpHBmP8

var t = 0
function setup() {
  createCanvas (windowWidth, windowHeight);

  noStroke()
}


function draw() {
  background (0,15);
  translate(width/2, height/2);

  var x = 150*cos(t)
  var y = 150*sin(2*t)/2

  fill("red")
  ellipse(x,y,15,15)
  
  fill("red")
  ellipse(-x,-y,15,15)
  
  fill("red")
  ellipse(y,x,15,15)
  
  fill("red")
  ellipse(-y,-x,15,15)
  
  t += 0.03

}
