function setup() {
createCanvas(windowWidth,windowHeight);
capture=createCapture(VIDEO);
//capture.hide();
//capture.size(240,180);
}


function draw() {
filter(THRESHOLD) 
image(capture, mouseX, mouseY);
}
