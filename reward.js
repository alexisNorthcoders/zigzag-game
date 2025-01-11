class Reward {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 7
    }
    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}