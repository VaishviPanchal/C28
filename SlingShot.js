class SlingShot{
    constructor(body,point) {
        var options={
            bodyA : body,
            pointB : point,
            length : 10,
            stiffness : 0.05
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }

    display(){
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
        //console.log(this.chain.pointB)
    }
    fly(){
        this.chain.bodyA=null;
    }
}
