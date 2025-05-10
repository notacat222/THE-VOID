var sound, analyzer, volume, string, myButton;
let img;
let imgWidth = 200;
let imgHeight = 60;

function preload(){
 sound=loadSound("workbook.mp3");
 img = loadImage("ME.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  getAudioContext().suspend();
  analyzer= new p5.Amplitude();
  myButton=createButton("CLICK ME");
  myButton.position(random(width),random(height));
}


function draw() {
  background(0);
  volume=analyzer.getLevel();
  mappedVol= map(volume, 0, 1.0, 0, width);
  image (img, mouseX,mouseY, mappedVol, imgWidth, imgHeight);
  push();
  translate(width/2,height/2);
  rotate(mappedVol);
    textSize(mappedVol);
    text(string,0,0);
  pop();
  console.log(volume + '|'+mappedVol);

}
function mousePressed(){
   getAudioContext().resume();
 analyzer= new p5.Amplitude();
 analyzer.setInput(sound);
 loop();
  if(sound.isPlaying()==true){
 sound.stop()
 sound.noLoop();
}
else {
  sound.play();
  sound.loop();
  }
}

function keyPressed(){
  if (key=='b'){
    fill("blue");
  }
  string=string+key;
}
