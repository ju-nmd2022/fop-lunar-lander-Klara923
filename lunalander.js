// setup of buttons
function setup() {
  createCanvas(600, 500);
  button = createButton("Play again!");
  button.mousePressed(playAgain);
  button.position(270, 450);
  button.style("color:white");
  button.style("background-color: rgb(155, 0, 0)");
  button.style("border-radius", "20px");
  button.style("border", "none");
  button.size(100, 30);
  button.hide();
  button1 = createButton("Start a game!");
  button1.hide();
  button1.mousePressed(startGame);
  button1.position(282.5, 420);
  button1.style("color:white");
  button1.style("background-color: rgb(155, 0, 0)");
  button1.style("border-radius", "20px");
  button1.style("border", "none");
  button1.size(100, 30);
}

// variables
let catY = 100;
let catX = 300;
let velocity = 0.1;
let acceleration = 0.1;
let catMovement = true;
let x1 = 300;
let y1 = 200;
let s1 = 1.2;
let x2 = 300;
let y2 = 200;
let s2 = 1.2;
let x3 = 100;
let y3 = 0;
let s3 = 1;
let pic1;
// moon image preload
function preload() {
  pic1 = loadImage("moon.png");
}

// cat
function emoji(catX, catY, s) {
  translate(0, 0);
  // Cat head
  fill(0, 0, 0);
  strokeWeight(2);
  stroke(255, 255, 255);
  ellipse(catX, catY, 200 * s);

  // Cat ears
  beginShape();
  vertex(catX - 100 * s, catY - 0 * s);
  vertex(catX - 100 * s, catY - 100 * s);
  vertex(catX - 40 * s, catY - 80 * s);
  endShape();

  beginShape();
  vertex(catX + 50 * s, catY - 80 * s);
  vertex(catX + 100 * s, catY - 100 * s);
  vertex(catX + 100 * s, catY + 1 * s);
  endShape();

  // Cat eyes
  fill(155, 0, 0);
  ellipse(catX - 50 * s, catY + 30 * s, 20 * s);
  ellipse(catX + 40 * s, catY + 30 * s, 20 * s);

  // Cat nose
  noStroke();
  beginShape();
  vertex(catX - 5 * s, catY + 50 * s);
  vertex(catX + 1 * s, catY + 40 * s);
  vertex(catX - 10 * s, catY + 40 * s);
  endShape();

  // moustaches

  fill(0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(6 * s);
  line(catX - 150 * s, catY + 10 * s, catX - 90 * s, catY + 30 * s);
  line(catX - 150 * s, catY + 40 * s, catX - 90 * s, catY + 40 * s);
  line(catX - 140 * s, catY + 80 * s, catX - 85 * s, catY + 50 * s);
  line(catX + 90 * s, catY + 30 * s, catX + 140 * s, catY + 10 * s);
  line(catX + 90 * s, catY + 40 * s, catX + 140 * s, catY + 40 * s);
  line(catX + 85 * s, catY + 50 * s, catX + 135 * s, catY + 80 * s);

  // Cat horns
  fill(255, 255, 255);
  noStroke();
  beginShape();
  vertex(catX - 40 * s, catY - 120 * s);
  vertex(catX - 30 * s, catY - 80 * s);
  vertex(catX - 50 * s, catY - 80 * s);
  endShape();

  fill(255, 255, 255);
  beginShape();
  vertex(catX + 30 * s, catY - 80 * s);
  vertex(catX + 40 * s, catY - 120 * s);
  vertex(catX + 50 * s, catY - 80 * s);
  endShape();
}

// starts - array and loop

let stars = [];

for (let i = 0; i < 100; i++) {
  const star = {
    x: Math.floor(Math.random() * 600),
    y: Math.floor(Math.random() * 600),
    alpha: Math.random(),
  };
  stars.push(star);
}

// screen1 = start screen

function screen1() {
  background(0, 0, 0);
  // stars
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha) * 255));

    ellipse(star.x, star.y, 2);
    star.alpha = star.alpha + 0.02;
    star.x = star.x + 0.1;
    star.y = star.y + 0.1;

    if (star.x > width) {
      star.x = 0;
    }
    if (star.y > height) {
      star.y = 0;
    }
  }
  // text
  fill(255, 255, 255);
  textSize(40);
  text("Cat Lander Game", 150, 200, 500, 500);
  textSize(15);
  text('Welcome to "Cat Lander Game"!', 210, 250, 500, 500);
  textSize(12);
  text("In this game you should put the cat to sleep.", 200, 290, 400, 400);
  text("Operate by arrows keys.", 250, 315, 500, 500);
  textSize(20);
  fill(255, 255, 255);
  text("Good luck!", 260, 350, 500, 500);
  button1.show();
}

// alpha for flashing dog eyes
let alpha = 0;

// screen2 = game screen
function screen2() {
  background(0, 0, 0);

  background(0, 0, 0);

  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha) * 255));

    ellipse(star.x, star.y, 2);
    star.alpha = star.alpha + 0.02;
    star.x = star.x + 0.1;
    star.y = star.y + 0.1;

    if (star.x > width) {
      star.x = 0;
    }
    if (star.y > height) {
      star.y = 0;
    }
  }

  // dog house
  push();
  stroke(255, 255, 255);
  strokeWeight(5);
  fill(0, 0, 0);
  rect(100, 430, 80, 66);
  // black line
  strokeWeight(6);
  stroke(0, 0, 0);
  fill(0, 0, 0);
  line(99, 430, 182, 430);
  // roof
  stroke(255, 255, 255);
  strokeWeight(5);
  fill(0, 0, 0);
  line(95, 438, 139, 400);
  line(185, 438, 139, 400);
  push();

  // door
  translate(139, 445);
  rotate(PI);
  noFill();
  strokeWeight(5);
  stroke(255, 255, 255);
  arc(0, -50, 45, 90, 0, PI);
  // dog eyes
  pop();
  noStroke();
  fill(155, 0, 0, Math.abs(Math.sin(alpha) * 255));
  ellipse(130, 480, 7, 7);
  alpha = alpha + 0.02;

  fill(155, 0, 0, Math.abs(Math.sin(alpha) * 255));
  ellipse(147, 480, 7, 7);
  alpha = alpha + 0.3;
  pop();

  // cat house
  push();
  translate(420, 445);
  rotate(PI);
  noFill();
  strokeWeight(5);
  stroke(255, 255, 255);
  arc(0, -50, 100, 100, 0, PI);
  pop();

  push();
  translate(420, 445);
  rotate(PI);
  noFill();
  strokeWeight(5);
  stroke(255, 255, 255);
  arc(0, -50, 50, 50, 0, PI);
  pop();

  push();

  fill(255, 255, 255);
  beginShape();
  vertex(390, 452);
  vertex(406, 450);
  vertex(390, 438);
  endShape();

  beginShape();
  vertex(450, 452);
  vertex(434, 450);
  vertex(450, 438);
  endShape();
  pop();

  // button is not showing
  button1.hide();
}

// screen3 = first ending, cat is dead
function screen3() {
  background(0, 0, 0);

  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha) * 255));

    ellipse(star.x, star.y, 2);
    star.alpha = star.alpha + 0.02;
    star.x = star.x + 0.1;
    star.y = star.y + 0.1;

    if (star.x > width) {
      star.x = 0;
    }
    if (star.y > height) {
      star.y = 0;
    }
  }
  // text
  fill(255, 255, 255);
  textSize(35);
  text("Oops! You killed a kitten.", 120, 380, 500, 500);
  // button play again
  button.show();
}

// dead cat

function emojix(x1, y1, s1) {
  translate(0, 0);
  // Cat head
  fill(0, 0, 0);
  strokeWeight(2);
  stroke(255, 255, 255);
  ellipse(x1, y1, 200 * s1);

  // Cat ears
  beginShape();
  vertex(x1 - 100 * s1, y1 - 0 * s1);
  vertex(x1 - 100 * s1, y1 - 100 * s1);
  vertex(x1 - 40 * s1, y1 - 80 * s1);
  endShape();

  beginShape();
  vertex(x1 + 50 * s1, y1 - 80 * s1);
  vertex(x1 + 100 * s1, y1 - 100 * s1);
  vertex(x1 + 100 * s1, y1 + 1 * s1);
  endShape();

  // Cat eyes
  push();
  strokeWeight(7);
  fill(255, 255, 255);
  line(x1 - 67 * s1, y1 + 10 * s1, x1 - 37 * s1, y1 + 40 * s1);
  line(x1 - 67 * s1, y1 + 40 * s1, x1 - 40 * s1, y1 + 10 * s1);
  line(x1 + 30 * s1, y1 + 10 * s1, x1 + 60 * s1, y1 + 40 * s1);
  line(x1 + 30 * s1, y1 + 40 * s1, x1 + 60 * s1, y1 + 10 * s1);
  pop();

  // Cat nose
  noStroke();
  fill(155, 0, 0);
  beginShape();
  vertex(x1 - 5 * s1, y1 + 50 * s1);
  vertex(x1 + 1 * s1, y1 + 40 * s1);
  vertex(x1 - 10 * s1, y1 + 40 * s1);
  endShape();

  // moustaches

  fill(0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(6 * s1);
  line(x1 - 150 * s1, y1 + 10 * s1, x1 - 90 * s1, y1 + 30 * s1);
  line(x1 - 150 * s1, y1 + 40 * s1, x1 - 90 * s1, y1 + 40 * s1);
  line(x1 - 140 * s1, y1 + 80 * s1, x1 - 85 * s1, y1 + 50 * s1);
  line(x1 + 90 * s1, y1 + 30 * s1, x1 + 140 * s1, y1 + 10 * s1);
  line(x1 + 90 * s1, y1 + 40 * s1, x1 + 140 * s1, y1 + 40 * s1);
  line(x1 + 85 * s1, y1 + 50 * s1, x1 + 135 * s1, y1 + 80 * s1);

  // Cat horns
  fill(255, 255, 255);
  noStroke();
  beginShape();
  vertex(x1 - 40 * s1, y1 - 120 * s1);
  vertex(x1 - 30 * s1, y1 - 80 * s1);
  vertex(x1 - 50 * s1, y1 - 80 * s1);
  endShape();

  fill(255, 255, 255);
  beginShape();
  vertex(x1 + 30 * s1, y1 - 80 * s1);
  vertex(x1 + 40 * s1, y1 - 120 * s1);
  vertex(x1 + 50 * s1, y1 - 80 * s1);
  endShape();
}

// screen4 = second ending, cat sleeps
function screen4() {
  background(0, 0, 0);
  // stars
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha) * 255));

    ellipse(star.x, star.y, 2);
    star.alpha = star.alpha + 0.02;
    star.x = star.x + 0.1;
    star.y = star.y + 0.1;

    if (star.x > width) {
      star.x = 0;
    }
    if (star.y > height) {
      star.y = 0;
    }
  }
  // text
  fill(255, 255, 255);
  textSize(35);
  text("Yay! You put the kitten to bed!", 60, 350, 500, 500);
  // button play again
  button.show();
}

function emojizzz(x2, y2, s2) {
  // Cat head
  fill(0, 0, 0);
  strokeWeight(2);
  stroke(255, 255, 255);
  ellipse(x2, y2, 200 * s2);

  // Cat ears
  beginShape();
  vertex(x2 - 100 * s2, y2 - 0 * s2);
  vertex(x2 - 100 * s2, y2 - 100 * s2);
  vertex(x2 - 40 * s2, y2 - 80 * s2);
  endShape();

  beginShape();
  vertex(x2 + 50 * s2, y2 - 80 * s2);
  vertex(x2 + 100 * s2, y2 - 100 * s2);
  vertex(x2 + 100 * s2, y2 + 1 * s2);
  endShape();

  // Cat nose
  noStroke();
  fill(155, 0, 0);
  beginShape();
  vertex(x2 - 5 * s2, y2 + 50 * s2);
  vertex(x2 + 1 * s2, y2 + 40 * s2);
  vertex(x2 - 10 * s2, y2 + 40 * s2);
  endShape();

  // moustaches

  fill(0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(6 * s2);
  line(x2 - 150 * s2, y2 + 10 * s2, x2 - 90 * s2, y2 + 30 * s2);
  line(x2 - 150 * s2, y2 + 40 * s2, x2 - 90 * s2, y2 + 40 * s2);
  line(x2 - 140 * s2, y2 + 80 * s2, x2 - 85 * s2, y2 + 50 * s2);
  line(x2 + 90 * s2, y2 + 30 * s2, x2 + 140 * s2, y2 + 10 * s2);
  line(x2 + 90 * s2, y2 + 40 * s2, x2 + 140 * s2, y2 + 40 * s2);
  line(x2 + 85 * s2, y2 + 50 * s2, x2 + 135 * s2, y2 + 80 * s2);

  // Cat horns
  fill(255, 255, 255);
  noStroke();
  beginShape();
  vertex(x2 - 40 * s2, y2 - 120 * s2);
  vertex(x2 - 30 * s2, y2 - 80 * s2);
  vertex(x2 - 50 * s2, y2 - 80 * s2);
  endShape();
  // Cat eyes
  fill(255, 255, 255);
  beginShape();
  vertex(x2 + 30 * s2, y2 - 80 * s2);
  vertex(x2 + 40 * s2, y2 - 120 * s2);
  vertex(x2 + 50 * s2, y2 - 80 * s2);
  endShape();
  push();
  stroke(255, 255, 255);
  noFill();
  strokeWeight(3 * s2);
  stroke(255, 255, 255);
  arc(x2 - 50 * s2, y2 + 30 * s2, 12 * s2, 30 * s2, 0 * s2, PI);
  arc(x2 + 50 * s2, y2 + 30 * s2, 12 * s2, 30 * s2, 0 * s2, PI);
  pop();
}
// "zzz"
function z(x3, y3) {
  fill(255, 255, 255);
  textSize(30);
  text("z", x3 + 270, y3 + 170);
  textSize(40);
  text("z", x3 + 300, y3 + 150);
  textSize(50);
  text("z", x3 + 330, y3 + 130);
}

state = "start";

function draw() {
  if (state === "start") {
    screen1();
    emoji(300, 100, 0.3);
    image(pic1, 20, 20, 100, 100);
  }
  if (state === "game") {
    screen2();
    emoji(catX, catY, 0.3);
    image(pic1, 20, 20, 100, 100);

    if (catMovement) {
      catY = catY + velocity;
      catX = catX;
      velocity = velocity + acceleration;

      if (keyIsDown(38)) {
        velocity = velocity - 0.4;
      }
      if (catY > 465) {
        catMovement = false;
      }
    }
  }
  // controlling cat with the keys
  if (keyIsDown(37)) {
    catX = catX - 1;
  }
  if (keyIsDown(39)) {
    catX = catX + 1;
  }
  // if cat is in certain position one of endings(screens)is displaying
  if (catX > 30 && catX < 150 && catY > 350) {
    state = "xx";
  }

  if (state === "xx") {
    screen3();
    emojix(x1, y1, s1);
  }

  if (catX > 400 && catX < 500 && catY > 400) {
    state = "zz";
  }
  if (state === "zz") {
    screen4();
    emojizzz(x2, y2, s2);
    z(x3, y3);
  }
}
// function for button of the first screen, if you press it, state = "game" so you start playing
function startGame() {
  state = "game";
}
// function for button1 on the screen3 and screen4, when you click it state = "start" so you start from the beggining (screen1)
function playAgain() {
  state = "start";
  catY = 100;
  catX = 300;
  velocity = 0.1;
  acceleration = 0.1;
  catMovement = true;
  x1 = 300;
  y1 = 200;
  s1 = 1.2;
  button.hide();
}
