class Box{
    constructor(x,y,width,height){


        var body_options ={
            restitution: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height, body_options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        fill("blue")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)


    }
}
