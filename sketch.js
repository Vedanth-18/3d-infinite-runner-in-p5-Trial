var bg, box1;
var bgSprite, boxSprite;
var zooming;
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
var Xpos;
var Ypos;

function preload(){
  bg = loadModel("untitled.obj");
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
  zooming=180;
  Xpos = -900;
  Ypos = 0;
}

function draw() {
  background(220);
  translate(0,0);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  orbitControl(1,1,1);
  scale(45);
  model(bg);
  
  
  // X = sliderGroup[0].value();
  // Y = sliderGroup[1].value();
  // Z = sliderGroup[2].value();
  // centerX = sliderGroup[3].value();
  // centerY = sliderGroup[4].value();
  // centerZ = sliderGroup[5].value();
  //camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
   stroke(255);
   fill(255, 102, 94);
  //box(85);
  //rotateY(90);
  //rotateZ(90);
  //rotate(180);
  
   if(frameCount%1===0){
     if(Xpos<0){
       Xpos+=6;
     }
     if(Xpos===0){
       Xpos= -600;
     }
   }
  camera(Xpos, -30, 0, 0,0,0,1,1,0);
  console.log(Xpos);
  
}
