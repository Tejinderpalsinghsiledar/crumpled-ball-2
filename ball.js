class Ball{
  constructor(x,y,radius){
      var options={
       restitution:0.5
      }
      this.body=Bodies.circle(x,y,radius,options)
      this.radius=radius
   
      World.add(world,this.body)
      this.image=loadImage("paper.png")

  }
  display(){
      var pos =this.body.position
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      angleMode(RADIANS)
      rotate(angle)
      image(this.image,50,200)
      pop()
  }
}


