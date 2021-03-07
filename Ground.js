class Ground{
    constructor(x,y,width,height){


        var body_options ={
            isStatic:true
        }
    
        this.body = Bodies.rectangle(x,y,width,height, body_options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)


    }
}