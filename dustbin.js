class Dustbin{
  constructor(x,y,width,height){
      var options={
        isStatic:true,
      }
    this.dustbin=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.dustbin)
  
  }
display(){
    push ();
  translate (this.dustbin.position.x,this.dustbin.position.y)
  fill ("red")
  stroke ("yellow")
  rectMode (CENTER)
   rect(0,0,this.width,this.height)
   pop ();
}
display2(){
  push ();
  translate (this.dustbin.position.x,this.dustbin.position.y)
  fill ("white")
 
  rectMode (CENTER)
   rect(0,0,this.width,this.height)
   pop ();



}
}