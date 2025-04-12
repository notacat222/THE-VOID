var t = 0
function setup() {
  createCanvas (windowWidth, windowHeight);

  noStroke()
}


function draw() {
  background (0,10);
  translate(width/2, height/2);

  //var x = 150*cos(t)
  //var y = 150*sin(2*t)/2
  
  var r = 2 + 7*cos(2*t)
  var x = r*20*cos(t)
  var y = r*20*sin(t)
  

  fill("red")
  ellipse(x,y,15,15)
  
   fill("red")
  ellipse(-x,-y,15,15)
  
  fill("red")
  ellipse(y,x,15,15)
  
  fill("red")
  ellipse(-y,-x,15,15)
  
  t += 0.02

}
