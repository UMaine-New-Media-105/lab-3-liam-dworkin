function setup() {
  createCanvas(400, 400);
}

function draw() { 
  background(220);
  
  waySheGoes();
  
  
  text('Helvetica');
  text("what am I doin", 250, 250);
  
  yeet();
   
  newFunct();
  newFunct(30,30,1.1);
  newFunct(60,60,1.2);
  newFunct(90,90,1.3);
  newFunct(125,125,1.4);
  newFunct(155,155,1.5);
   
}

function newFunct(x,y,size) {
  push();
  translate(x,y);
  scale(size);
  stroke('black');
  rect(30,30,40,40);
  //whatever image I'm trying to re-create depending on the program
  pop(); 
}

function yeet() {
  
  if (mouseX >= 150) { 
    fill ('red'); 
  }
  
  else if (mouseY >= 150) {
    fill ('cyan'); 
  }
  
  else if (mouseIsPressed) { 
  fill ('green'); 
  }

  if (mouseY, mouseX > 230) { 
    translate(40,-20);
  }
  
  else { 
    translate(-25,20);  
  }

}

function waySheGoes () {
  
  if (mouseIsPressed) { 
  
  stroke("rgb(241,31,101)");
  strokeWeight(1.5);
  fill("rgb(18,224,255)");
  textSize(20);}
  
}
