var t=0;
var timer=4300;
var mine=1;
var angle=0;
let r=300;

function setup() {
  createCanvas(windowWidth,windowHeight);
  var stclr = color(0,0,0);
   background(0);
}
function draw() {
  
  if(millis()<=timer){
  var stclr = color(255,255,255);
 
 
  translate(width*.5,height*.5);
  rotate(t/360);
  stclr=drawSquiggle(t);
  
  t+=10*mine;

  }
  //ilk üçgenler
  else if(millis()<=timer*1.5){
    
  translate(windowWidth/2,windowHeight/2);
  rotate(radians(angle));
    noFill();
    stroke(random(0,255),random(100,255),random(0,255));
    triangle(windowWidth/5.5+30,windowHeight/5.5+30,windowWidth/5.5-1,windowHeight/5.5-1,windowWidth/5.5+20,windowHeight/5.5-1);
  
  angle+=5;
  }
  //ikinci üçgenler
  else if(millis()<=timer*2){
    
  translate(windowWidth/2,windowHeight/2);
  rotate(radians(angle));
    noFill();
    stroke(random(150,255),random(100,255),random(150,255));
    triangle(windowWidth/5.5+50,windowHeight/5.5+50,windowWidth/5.5+20,windowHeight/5.5+20,windowWidth/5.5+60,windowHeight/5.5+80);
  
  angle+=5;}
  
  
 //kareler
   else if(millis()<=timer*2.7){
   
  translate(windowWidth/2,windowHeight/2);
  rotate(radians(angle));
    noFill();
     strokeWeight(2);
     
    stroke(200,100,random(0,255));
    rect(windowWidth/5+70,windowHeight/5+70,random(20,50),random(20,50));
  
  angle+=5;
  }
  
  else if(millis()<=timer*4.5){
   
  translate(windowWidth/2,windowHeight/2);
  rotate(radians(angle));
    noFill();
     strokeWeight(0.5);
    stroke(random(100,255),random(100,255),random(100,255));
    line(windowWidth/5+96,windowHeight/5+96,windowWidth/5+180,windowHeight/5+180);
  
  angle+=1;
  }
  //son elipsler
   else if(millis()<=timer*5){
  
    noFill();
     strokeWeight(1);
    stroke(random(100,255),random(100,255),random(100,255));
   ellipse(width/2,height/2,r,r);
   r+=10;
  }
}


//ortadaki şekil için
function drawSquiggle(t) {
	// draw squiggle
    var y1 =  sin(t/50) * 3;
    var y2 =  sin(t/50 + 0.4) * 3;
  var stclr = color(255,255,255);
	strokeWeight(1);
	
	noFill();
	beginShape();
    curveVertex(0,0);
    curveVertex(0,0);
	curveVertex(-10, -50);
	curveVertex(20,-60);
	curveVertex( 40, -100 );
    curveVertex( 70, -100 );
    curveVertex( 120, -120 );
	curveVertex( 60, 70 );
	curveVertex(0 , 0);
    strokeWeight(18);
    if(millis()%500<25){  
      stclr= color(random(0,255),random(0,255),random(0,255));
         // background(255-stclr[0],255-stclr[1],255-stclr[2]);

      
      stroke(stclr);}
       strokeWeight(1);
	
	endShape();
   return(stclr);
}