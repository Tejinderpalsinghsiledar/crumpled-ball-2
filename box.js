class Box{
    constructor(x,y,width,height){
        var options={
         restitution:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
        this.image=loadImage("dustbingreen.png")
    }
    display(){
        var pos =this.body.position
        var angle=this.body.angle
        push()
        fill("green")
        rect(pos.x,pos.y,this.width,this.height)
        image(this.image,450,350)

        pop()
    }
}
