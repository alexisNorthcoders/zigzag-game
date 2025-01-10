class Rectangle {
    constructor(x, y, width, height, colour = "white") {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.colour = colour
    }

    draw(ctx) {

        ctx.fillStyle = this.colour
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    contains(player) {
        const left = this.x + player.radius
        const right = this.x + this.width - player.radius
        const top = this.y + player.radius
        const bottom = this.y + this.height - player.radius
        return (player.x >= left &&
            player.x <= right &&
            player.y >= top &&
            player.y <= bottom)
    }
    changeSpeed(player) {
        const largestSide = Math.max(this.height, this.width)

        switch (largestSide) {
            case 450:
                player.speed = 7
                break
            case 550:
                player.speed = 10
                break
            case 600:
                player.speed = 4
                break
            default:
                player.speed = 5
                break
        }
    }
}