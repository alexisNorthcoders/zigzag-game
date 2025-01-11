class Track {
    constructor(left, top, num, m, l) {
        this.left = left
        this.top = top
        this.m = m
        this.l = l

        this.rectangles = []
        this.rewards = []
        this.index = 0
        while (this.index < num) {
            this.queueRectangle()
        }
    }
    spawnReward(x, y) {
        this.rewards.push(new Reward(x, y))
    }
    queueRectangle() {

        if (this.index % 2 === 0) {
            const [width, height] = [this.l, this.m]

            this.rectangles.push(new Rectangle(this.left, this.top, width, height))
            this.left += width - this.m

            const randomX = this.left - 2 * height + Math.random() * (2 * height)
            const randomY = this.top + Math.random() * height
            this.spawnReward(randomX, randomY)
        }
        else {
            const [width, height] = [this.m, this.l]

            this.rectangles.push(new Rectangle(this.left, this.top, width, height))
            this.top += height - this.m
        }
        this.index++
    }
    contains(player) {
        return this.rectangles.some(rectangle => rectangle.contains(player))
    }

    draw(ctx) {
        this.rectangles.forEach(rectangle => rectangle.draw(ctx))
        this.rewards.forEach(reward => reward.draw(ctx))
    }

    dequeueRectangle() {
        this.rectangles.shift()
    }
    adjustFor(player) {
        for (let i = 0; i < this.rectangles.length; i++) {
            const rect = this.rectangles[i]
            if (rect.contains(player)) {
                rect.changeSpeed(player)
                if (i > this.rectangles.length / 2) {
                    this.dequeueRectangle()
                    this.queueRectangle()
                    break
                }
            }
        }
    }
}

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