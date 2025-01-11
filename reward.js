class Reward {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 7
        this.points = 500
    }
    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
    contains(player) {
        return Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2) < this.radius + player.radius
    }
}