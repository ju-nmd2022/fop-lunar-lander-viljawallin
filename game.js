background(255, 255, 255);

push();
noStroke();
fill(255, 215, 255);
rect(100, 140, 110, 140, 55, 55, 0);
pop();
/* Body */

push();
noStroke();
fill(200, 234, 255);
ellipse(92, 290, 40, 35);
ellipse(106, 270, 30, 28);
ellipse(115, 310, 45, 38);
ellipse(128, 284, 50, 45);
ellipse(154, 320, 55, 40);
ellipse(172, 285, 66, 55);
ellipse(196, 310, 50, 40);
ellipse(215, 285, 40, 35);
pop();
/* Cloud */

push();
noStroke();
fill(255, 255, 255);
ellipse(130, 200, 30, 40);
ellipse(180, 200, 30, 40);
pop();
push();
fill(80, 35, 0);
ellipse(133, 192, 18, 18);
ellipse(183, 192, 18, 18);
pop();
push();
fill(255, 255, 255);
ellipse(138, 190, 7, 7);
ellipse(188, 190, 7, 7);
pop();
push();
noStroke();
fill(255, 215, 255);
ellipse(130, 223, 30, 18);
ellipse(180, 223, 30, 18);
pop();
/* Eyes */

push();
strokeWeight(2);
stroke(245, 118, 138);
fill(255, 158, 158);
ellipse(155, 220, 36, 15);
pop();
/* Nose */

push();
fill(0, 0, 0);
beginShape();
vertex(155, 240);
bezierVertex(155, 240, 20, 10, 180, 230);
pop();

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
