let t = 0; // Main time parameter
const speed = 1; // Adjust for animation speed
const traceDensity = 1; // Adjust for how many points are effectively traced (lower for more gaps)
const pointSize = 5; // Size of the tracing points

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // Black background for contrast
  stroke(255); // White tracing color
  fill(255);
  noStroke(); // No outline for the tracing points
}

function draw() {
  // Don't clear the background for the continuous trace
  // background(0);

  // Center of the window
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;

  // Scale factor to make the equation as big as the window
  let scale = min(windowWidth, windowHeight) * 0.45; // Adjust 0.45 for some margin

  // Parametric Equations (Lissajous curve with time-varying frequencies)
  let freqX = 2 + sin(t * 0.02) * 1.5; // Frequency in X, oscillates over time
  let freqY = 3 + cos(t * 0.03) * 2;   // Frequency in Y, oscillates over time
  let phaseX = cos(t * 0.05) * PI;     // Phase shift in X, changes over time
  let phaseY = sin(t * 0.04) * PI;     // Phase shift in Y, changes over time

  // Calculate x and y coordinates
  let x = centerX + cos(freqX * t + phaseX) * scale;
  let y = centerY + sin(freqY * t + phaseY) * scale;

  // Draw the tracing point
  if (random(1) < traceDensity) { // Control the density of traced points
    ellipse(x, y, pointSize, pointSize);
  }

  t += speed;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); // Redraw background on resize
}
