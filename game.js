let x = 100;
let y = 100;
const s = 1.0;

background(255, 255, 255);

push();
noStroke();
fill(200, 255, 205);
ellipse(x - 8, y + 190, 40, 35);
ellipse(x + 6, y + 170, 30, 28);
ellipse(x + 15, y + 210, 45, 38);
ellipse(x + 28, y + 184, 50, 45);
ellipse(x + 54, y + 220, 55, 40);
ellipse(x + 72, y + 185, 66, 55);
ellipse(x + 96, y + 210, 50, 40);
ellipse(x + 115, y + 185, 40, 35);
pop();

push();
fill(245, 228, 210);
noStroke();
beginShape();
vertex(x + 600, y + 380);
bezierVertex(x + 640, y + 380, x + 650, y + 150, x + 640, y + 110);
vertex(x + 640, y + 110);
bezierVertex(x + 640, y + 110, x + 653, y + 110, x + 670, y + 110);
vertex(x + 670, y + 110);
bezierVertex(x + 670, y + 110, x + 655, y + 305, x + 710, y + 380);
endShape();
pop();

function bob(x, y) {
  push();
  noStroke();
  fill(255, 215, 255);
  rect(x, y + 40, 110, 140, 55, 55, 0);
  pop();
  /* Body */

  push();
  noStroke();
  fill(200, 234, 255);
  ellipse(x - 8, y + 190, 40, 35);
  ellipse(x + 6, y + 170, 30, 28);
  ellipse(x + 15, y + 210, 45, 38);
  ellipse(x + 28, y + 184, 50, 45);
  ellipse(x + 54, y + 220, 55, 40);
  ellipse(x + 72, y + 185, 66, 55);
  ellipse(x + 96, y + 210, 50, 40);
  ellipse(x + 115, y + 185, 40, 35);
  pop();
  /* Cloud */

  function eyes(x) {
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(x + 30, y + 100, 30, 40);
    pop();

    push();
    fill(80, 35, 0);
    ellipse(x + 33, y + 92, 18, 18);
    pop();

    push();
    fill(255, 255, 255);
    ellipse(x + 38, y + 90, 7, 7);
    pop();

    push();
    noStroke();
    fill(255, 215, 255);
    ellipse(x + 30, y + 123, 30, 18);
    pop();
  }

  eyes(x);
  eyes(x + 50);
  /* The eyes */

  push();
  strokeWeight(2);
  stroke(245, 118, 138);
  fill(255, 158, 158);
  ellipse(x + 55, y + 120, 36, 15);
  pop();
  /* Nose */

  push();
  noFill();
  strokeWeight(2);
  beginShape();
  vertex(x + 48, y + 140);
  bezierVertex(x + 48, y + 140, x + 65, y + 147, x + 80, y + 130);
  endShape();
  beginShape();
  fill(80, 35, 0);
  vertex(x + 76, y + 125);
  bezierVertex(x + 74, y + 125, x + 77, y + 124, x + 86, y + 132);
  endShape();
  pop();
  /* Mouth */

  push();
  noStroke();
  fill(200, 180, 230);
  rect(x - 100, y + 380, 10000);
  pop();
}

bob(x, y);
bob(x + 200, y + 100);

// fill(80, 50, 3);
// ellipse(x + 110, y + 10, 30);
// ellipse(x + 179, y + 10, 30);
// /* Pupil */

// fill(250, 225, 200);
// ellipse(x + 100, y + 58, 75, 60);
// ellipse(x + 190, y + 58, 75, 60);
// /* Changing the shape of the eyes */

// fill(255, 255, 255);
// ellipse(x + 112, y + 6, 12);
// ellipse(x + 177, y + 6, 12);
// /* White pupil/light in the eyes */

// fill(200,40,40);
// beginShape();
// vertex(100, 290);
// bezierVertex(100, 290, 110, 330, 125, 290);
// endShape();
