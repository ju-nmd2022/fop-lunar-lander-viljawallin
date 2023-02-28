let x = 100;
let y = 100;
let s = 0.5;
let rotation = 0;
let state = "start";
let buttonIsClicked = false;

let bobY = 100;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = true;
acceleration = 0.1;

function setup() {
  createCanvas(700, 600);
  background(255, 255, 255);
}

/*Talking bubble*/
// Reference used to make this bubble= "Foundations of Programming - Emoji with a speechbubble", by Garrit. //
function button(x, y, s) {
  push();
  beginShape();
  vertex(x + 150 * s, y - 20 * s);
  vertex(x + 50 * s, y - 20 * s);
  bezierVertex(x, y - 20 * s, x, y - 80 * s, x + 50 * s, y - 80 * s);
  vertex(x + 240 * s, y - 80 * s);
  bezierVertex(
    x + 290 * s,
    y - 80 * s,
    x + 290 * s,
    y - 20 * s,
    x + 240 * s,
    y - 20 * s
  );
  vertex(x + 180 * s, y - 20 * s);
  vertex(x + 140 * s, y + 20 * s);
  endShape(CLOSE);
  text("START GAME", x + 80 * s, y - 45 * s);
  pop();
}

function buttonAgain(x, y, s) {
  push();
  beginShape();
  vertex(x + 150 * s, y - 20 * s);
  vertex(x + 50 * s, y - 20 * s);
  bezierVertex(x, y - 20 * s, x, y - 80 * s, x + 50 * s, y - 80 * s);
  vertex(x + 240 * s, y - 80 * s);
  bezierVertex(
    x + 290 * s,
    y - 80 * s,
    x + 290 * s,
    y - 20 * s,
    x + 240 * s,
    y - 20 * s
  );
  vertex(x + 180 * s, y - 20 * s);
  vertex(x + 140 * s, y + 20 * s);
  endShape(CLOSE);
  textFont("Arial");
  textSize(15);
  fill(0, 0, 0);
  text("PLAY AGAIN", x + 60 * s, y - 45 * s);
  pop();
}

function bob(x, y, s) {
  push();
  noStroke();
  fill(255, 215, 255);
  rect(x, y + 40 * s, 110 * s, 140 * s, 55 * s, 55 * s, 0 * s);
  pop();

  /* Cloud */
  push();
  noStroke();
  fill(200, 234, 255);
  ellipse(x - 8 * s, y + 190 * s, s * 40, s * 35);
  ellipse(x + 6 * s, y + 170 * s, 30 * s, 28 * s);
  ellipse(x + 15 * s, y + 210 * s, 45 * s, 38 * s);
  ellipse(x + 28 * s, y + 184 * s, 50 * s, 45 * s);
  ellipse(x + 54 * s, y + 220 * s, 55 * s, 40 * s);
  ellipse(x + 72 * s, y + 185 * s, 66 * s, 55 * s);
  ellipse(x + 96 * s, y + 210 * s, 50 * s, 40 * s);
  ellipse(x + 115 * s, y + 185 * s, 40 * s, 35 * s);
  pop();

  function eyes(x, y, s) {
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(x + 30 * s, y + 100 * s, 30 * s, 40 * s);
    pop();

    push();
    fill(80, 35, 0);
    ellipse(x + 33 * s, y + 92 * s, 18 * s, 18 * s);
    pop();

    push();
    fill(255, 255, 255);
    ellipse(x + 38 * s, y + 90 * s, 7 * s, 7 * s);
    pop();

    push();
    noStroke();
    fill(255, 215, 255);
    ellipse(x + 30 * s, y + 123 * s, 30 * s, 18 * s);
    pop();
  }

  /* The eyes */
  eyes(x, y, s);
  eyes(x + 50 * s, y, s);

  /* Nose */
  push();
  strokeWeight(2);
  stroke(245, 118, 138);
  fill(255, 158, 158);
  ellipse(x + 55 * s, y + 120 * s, 36 * s, 15 * s);
  pop();

  /* Mouth */
  push();
  noFill();
  strokeWeight(2);
  beginShape();
  vertex(x + 48 * s, y + 140 * s);
  bezierVertex(
    x + 48 * s,
    y + 140 * s,
    x + 65 * s,
    y + 147 * s,
    x + 80 * s,
    y + 130 * s
  );
  endShape();
  beginShape();
  fill(80, 35, 0);
  vertex(x + 76 * s, y + 125 * s);
  bezierVertex(
    x + 74 * s,
    y + 125 * s,
    x + 77 * s,
    y + 124 * s,
    x + 86 * s,
    y + 132 * s
  );
  endShape();
  pop();
}

function scenery() {
  push();
  noStroke();
  fill(255, 255, 230);
  rect(0, 0, width, height);

  fill(200, 180, 230);
  rect(0, 475, 700);
  pop();
}

/* Mushroom */
function mushroom(x, y, s) {
  push();
  noStroke();
  fill(255, 10, 10);
  rect(x + 280 * s, y + 358 * s, 160 * s, 40 * s, 30 * s, 30 * s, 0 * s);
  ellipse(x + 295 * s, y + 375 * s, 10 * s);
  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 295 * s, y + 375 * s, 20 * s, 18 * s);
  ellipse(x + 320 * s, y + 368 * s, 15 * s, 15 * s);
  ellipse(x + 340 * s, y + 382 * s, 16 * s, 13 * s);
  ellipse(x + 355 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 375 * s, y + 365 * s, 15 * s, 12 * s);
  ellipse(x + 392 * s, y + 380 * s, 18 * s, 15 * s);
  ellipse(x + 409 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 428 * s, y + 377 * s, 15 * s, 18 * s);
  pop();
}

function mushroomBlue(x, y, s) {
  push();
  noStroke();
  fill(130, 150, 250);
  rect(x + 280 * s, y + 358 * s, 160 * s, 40 * s, 30 * s, 30 * s, 0 * s);
  ellipse(x + 295 * s, y + 375 * s, 10 * s);
  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 295 * s, y + 375 * s, 20 * s, 18 * s);
  ellipse(x + 320 * s, y + 368 * s, 15 * s, 15 * s);
  ellipse(x + 340 * s, y + 382 * s, 16 * s, 13 * s);
  ellipse(x + 355 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 375 * s, y + 365 * s, 15 * s, 12 * s);
  ellipse(x + 392 * s, y + 380 * s, 18 * s, 15 * s);
  ellipse(x + 409 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 428 * s, y + 377 * s, 15 * s, 18 * s);
  pop();
  push();
  noStroke();
  fill(180, 230, 180);
  rect(x + 350 * s, y + 398 * s, 20 * s, 163 * s);
  pop();
}

function mushroomPink(x, y, s) {
  push();
  noStroke();
  fill(250, 150, 250);
  rect(x + 280 * s, y + 358 * s, 160 * s, 40 * s, 30 * s, 30 * s, 0 * s);
  ellipse(x + 295 * s, y + 375 * s, 10 * s);
  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 295 * s, y + 375 * s, 20 * s, 18 * s);
  ellipse(x + 320 * s, y + 368 * s, 15 * s, 15 * s);
  ellipse(x + 340 * s, y + 382 * s, 16 * s, 13 * s);
  ellipse(x + 355 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 375 * s, y + 365 * s, 15 * s, 12 * s);
  ellipse(x + 392 * s, y + 380 * s, 18 * s, 15 * s);
  ellipse(x + 409 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 428 * s, y + 377 * s, 15 * s, 18 * s);
  pop();
  push();
  noStroke();
  fill(180, 230, 180);
  rect(x + 350 * s, y + 398 * s, 20 * s, 100 * s);
  pop();
}

function mushroomYellow(x, y, s) {
  push();
  noStroke();
  fill(255, 230, 100);
  rect(x + 280 * s, y + 358 * s, 160 * s, 40 * s, 30 * s, 30 * s, 0 * s);
  ellipse(x + 295 * s, y + 375 * s, 10 * s);
  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 295 * s, y + 375 * s, 20 * s, 18 * s);
  ellipse(x + 320 * s, y + 368 * s, 15 * s, 15 * s);
  ellipse(x + 340 * s, y + 382 * s, 16 * s, 13 * s);
  ellipse(x + 355 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 375 * s, y + 365 * s, 15 * s, 12 * s);
  ellipse(x + 392 * s, y + 380 * s, 18 * s, 15 * s);
  ellipse(x + 409 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 428 * s, y + 377 * s, 15 * s, 18 * s);
  pop();
  push();
  noStroke();
  fill(180, 230, 180);
  rect(x + 350 * s, y + 398 * s, 20 * s, 163 * s);
  pop();
}

function mushroomPurple(x, y, s) {
  push();
  noStroke();
  fill(225, 80, 250);
  rect(x + 280 * s, y + 358 * s, 160 * s, 40 * s, 30 * s, 30 * s, 0 * s);
  ellipse(x + 295 * s, y + 375 * s, 10 * s);
  pop();
  push();
  noStroke();
  fill(255, 255, 255);
  ellipse(x + 295 * s, y + 375 * s, 20 * s, 18 * s);
  ellipse(x + 320 * s, y + 368 * s, 15 * s, 15 * s);
  ellipse(x + 340 * s, y + 382 * s, 16 * s, 13 * s);
  ellipse(x + 355 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 375 * s, y + 365 * s, 15 * s, 12 * s);
  ellipse(x + 392 * s, y + 380 * s, 18 * s, 15 * s);
  ellipse(x + 409 * s, y + 370 * s, 10 * s, 10 * s);
  ellipse(x + 428 * s, y + 377 * s, 15 * s, 18 * s);
  pop();
  push();
  noStroke();
  fill(180, 230, 180);
  rect(x + 350 * s, y + 398 * s, 20 * s, 163 * s);
  pop();
}

function overScreen() {
  push();
  background(255, 100, 100);
  textSize(40);
  fill(255, 0, 0);
  textFont("Comic Sans MS");
  text("GAME OVER!", 220, 80);
  pop();
  push();
  textSize(25);
  textFont("Comic Sans MS");
  fill(0, 0, 0);
  text("NEXT TIME BOB...", 235, 120);

  push();
  noStroke();
  fill(200, 180, 230);
  rect(0, 490, s * 10000);
  pop();

  bob(x + 122, y + 50, s * 1.7);
  push();
  fill(255, 255, 255);
  buttonAgain(x + 200, y + 90, s);
  pop();
}

function finishedScreen() {
  push();
  background(210, 255, 210);
  textSize(35);
  fill(255, 10, 10);
  textFont("Comic Sans MS");
  text("YOU MADE IT!", 220, 60);
  pop();
  push();
  textSize(40);
  textFont("Comic Sans MS");
  fill(245, 200, 200);
  text("GOOD JOB BOB", 190, 100);

  push();
  noStroke();
  fill(200, 180, 230);
  rect(0, 490, s * 10000);
  pop();

  bob(x + 122, y + 50, s * 1.7);
  push();
  fill(255, 255, 255);
  buttonAgain(x + 200, y + 90, s);
  pop();
}

function startScreen() {
  scenery();
  push();
  noStroke();
  fill(200, 180, 230);
  rect(x - 100, y + 390, s * 10000);
  pop();
  bob(210, y, s * 1.4);
  button(x + 135, y + 25, s * 1.15);

  //mouseClicked();
}

function gameScreen() {
  scenery();
  mushroom(-15, 117, s * 1.8);
  mushroomBlue(300, 110, s * 1.3);
  mushroomPink(280, 226, s);
  mushroomPurple(-200, 26, s * 1.6);
  mushroomYellow(-30, 167, s * 1.1);
  bob(280, bobY, s);

  if (isGameActive) {
    bobY = bobY + velocity;
    velocity = velocity + acceleration;

    if (mouseIsPressed) {
      velocity = velocity - 0.3;
    }

    if (bobY > 332) {
      isGameActive = false;
      if (velocity > 2) state = "over";
      else state = "finished";
    }
  }
}

function mouseClicked() {
  if (state === "start") {
    if (
      mouseX > x + 142 &&
      mouseX < x + 145 + 152 &&
      mouseY > y - 26 &&
      mouseY < y + 12 + 5
    ) {
      state = "game";
      //gameScreen();
    }
  } else if (state === "over" || state === "finished") {
    if (
      mouseX > x + 206 &&
      mouseX < x + 206 + 132 &&
      mouseY > y + 55 &&
      mouseY < y + 55 + 23
    ) {
      bobY = 100;
      velocity = 1;
      isGameActive = true;
      state = "game";
    }
  }
}

function draw() {
  if (state === "start") startScreen();
  else if (state === "game") gameScreen();
  else if (state === "over") overScreen();
  else if (state === "finished") finishedScreen();
}
