class Paper{
  constructor(x,y,width,height){  
      var options={
       isStatic: false,
       restitution:0.5,
       friction:0.5,
       density:1.2


      }
     this.paper=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.paper)
    this.image=loadImage("paper.png")

  }
    display(){
        push ();
        translate (this.paper.position.x,this.paper.position.y)
        fill ("pink")
       imageMode (CENTER)
     image(this.image,0,0,this.width,this.height)
     pop ();
      

    }
}