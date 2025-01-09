class Player {
    constructor(x, y, radius, speed = 2) {
        this.x = x
        this.y = y
        this.radius = radius
        this.direction = "right"
        this.speed = speed
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = "yellow"
        ctx.fill()
    }
    move(){
        switch(this.direction){
            case "right":
                this.x += this.speed
                break
            default:
                this.y += this.speed
                break
        }
    }
    changeDirection(){
        this.direction = this.direction === "right" ? "down" : "right"
    }
}