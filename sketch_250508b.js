var sound, analyzer, volume, string, myButton;
let img;
let imgWidth = 70;
let imgHeight = 70;
let mappedVolume=100;
let go=false;
function preload(){
 sound=loadSound("data/workbook.mp3");
 img = loadImage("data/ME.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  getAudioContext().suspend();
  analyzer= new p5.Amplitude();
  myButton=createButton("CLICK ME");
  myButton.position(random(width),random(height));
  noLoop();
}


function draw() {
  background(0);
  volume=analyzer.getLevel();
  mappedVol= map(volume, 0, 1.0, 0, width/6);
  if (go==true){
  image (img, mouseX,mouseY, mappedVol, mappedVol);
  }
  push();
  translate(width/2,height/2);
  rotate(mappedVol);
    textSize(mappedVol);
    text(string,0,0);
  pop();
  console.log(volume + '|'+mappedVol);

}
function mousePressed(){
  go=true;
   getAudioContext().resume();
 analyzer= new p5.Amplitude();
 analyzer.setInput(sound);
 loop();
  if(sound.isPlaying()==true){
 sound.stop()
 go=false;
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
