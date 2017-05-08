function Snake(){
  this.xspeed =1;
  this.yspeed=0;
  this.headx=240;
  this.heady=240;
  var scale=12;
  
  this.tailx=[];
  this.taily=[];
  this.head= function(){
    
    fill(255,0,0);
    rect(this.headx,this.heady,12,12);
    this.headx=this.headx+this.xspeed*scale;
    this.heady=this.heady+this.yspeed*scale;
    
  };
   
   
   this.increasetail=function(t){
      if(t===1){ 
         this.tailx.push(f.x);
         this.taily.push(f.y);
      };
      if(t===0) {
          var t=this.tailx.shift();
          t= this.taily.shift();
          this.tailx.push(sbody.headx);
          this.taily.push(sbody.heady);
      };
   };
   this.drawtail=function(){
       for(var i=0;i<this.tailx.length;i++){
           rect(this.tailx[i],this.taily[i],12,12);
       }
   };
   this.iftouching=function(){
    if(this.headx>468||this.headx<0 || this.heady>468 ||this.heady<0){
        this.headx=240;
        this.heady=240;
        this.tailx=[];
        this.taily=[];
    }
    for(var i=0;i<this.tailx.length;i++){
       if(this.tailx[i]==this.headx && this.taily[i]==this.heady){ 
         this.headx=240;
         this.heady=240;
         this.tailx=[];
         this.taily=[];
     }  
    }
   }
}
   


var sbody;
sbody=new Snake();
function Food(){
    
    this.x=Math.floor(Math.random()*39)*12;
    this.y=Math.floor(Math.random()*39)*12;
    this.updatefood= function(){
        this.x=Math.floor(Math.random()*39)*12;
        this.y=Math.floor(Math.random()*39)*12;
    };
    this.drawfood=function(){
        fill(0);
        rect(this.x,this.y,12,12);
    };
    
 }
var f= new Food();

    
function setup() {
  
  frameRate(10);
  createCanvas(480,480);
  background(0,0,255);
  
}

function draw() {
  background(0,0,255);
  sbody.head();
  sbody.iftouching();
  sbody.drawtail();
  
  f.drawfood();
  console.log(f.x,f.y);
  if(sbody.headx==f.x && sbody.heady==f.y){
      sbody.increasetail(1);
      f.updatefood();
      
     
  }
  else {
      sbody.increasetail(0);
  }
  
  
  
  
    
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        sbody.xspeed=0;
        sbody.yspeed=-1;}
    else if(keyCode===DOWN_ARROW){
        sbody.xspeed=0;
        sbody.yspeed=1;}
    else if(keyCode===LEFT_ARROW){
        sbody.xspeed=-1;
        sbody.yspeed=0;}
    else if(keyCode===RIGHT_ARROW){
        sbody.xspeed=1;
        sbody.yspeed=0;}
}