let t = 0; // Time parameter
const speed = 0.02; // Speed of the animation
const traceSpeed = 0.5; // Speed of the point tracing
const baseRadius = 80; // Base size of the shape
let centerX, centerY; // Center of the tracing

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  stroke(255);
  fill(255); // To see the tracing point
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  // Don't clear the background to see the trace
  // background(20);

  translate(centerX, centerY);

  // Define the parametric equations for the point
  let angle = t * traceSpeed; // Make the angle change with time

  // Parametric Equations (same as before, but using 'angle' derived from time)
  let k = 3; // Ratio of radii
  let r = baseRadius; // Radius of the moving circle
  let R = k * r; // Radius of the fixed circle

  let x = (R + r) * cos(angle) - r * cos((R / r + 1) * angle + t * 0.5);
  let y = (R + r) * sin(angle) - r * sin((R / r + 1) * angle + t * 0.5);

  // Draw the tracing point
  ellipse(x, y, 5, 5);

  t += speed;
}
