class Link {
    constructor(bodyA, bodyB) {
        var lastlink = bodyA.body.bodies.length - 2
        var options = {
          bodyA:bodyA.body.bodies[lastlink],bodyB:bodyB,length: 0,stiffness:0.01,
          pointA:{x:0,y:0},pointB:{x:0,y:0}
        }
        this.link = Constraint.create(options)
        World.add(world,this.link)

    }
}