var sound, analyzer, volume, string, myButton;

function preload(){
 sound=loadSound("2hollis.mp3");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("pink");
  getAudioContext().suspend();
  analyzer= new p5.Amplitude();
  string="DANCE";
  myButton=createButton("DANCE NOW");
  myButton.position(random(width),random(height));
}


function draw() {
  background("pink");
  volume=analyzer.getLevel();
  mappedVol= map(volume, 0, 1.0, 0, width);
  circle(mouseX,mouseY, mappedVol);
  push();
  translate(width/2,height/2);
  rotate(mappedVol);
    textSize(mappedVol);
    text("DANCE", 0, 0);
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
