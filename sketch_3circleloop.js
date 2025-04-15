//code taken from AI, I tried various prompts and decided I liked this one. I changed a few of the paramters.


let t = 0; // Time parameter
const speed = 0.02; // Speed of the animation
const numPoints = 150; // Number of points to draw the shape
const baseRadius = 80; // Base size of the shape
const motionSpeed = 0.01; // Speed of the overall motion
let centerX, centerY; // Center of the overall motion

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  stroke(255);
  noFill();
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(20);

  // Define the center of the moving pattern
  let motionX = centerX + cos(t * motionSpeed) * 50; // Circular horizontal motion
  let motionY = centerY + sin(t * motionSpeed * 0.7) * 30; // Elliptical vertical motion

  push(); // Save the current transformation
  translate(motionX, motionY); // Move the origin to the current center of motion

  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let angle = map(i, 0, numPoints, 0, TWO_PI * 3);

    // Parametric Equations (Example: Epicycloid-like)
    let k = 3; // Ratio of radii
    let r = baseRadius; // Radius of the moving circle
    let R = k * r; // Radius of the fixed circle

    let x = (R + r) * cos(angle) - r * cos((R / r + 1) * angle + t * 0.5);
    let y = (R + r) * sin(angle) - r * sin((R / r + 1) * angle + t * 0.5);

    vertex(x, y);
  }
  endShape();
  pop(); // Restore the previous transformation

  t += speed;
}
