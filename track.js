class Track {
    constructor(left, top, num, m, l) {
        this.left = left
        this.top = top
        this.m = m
        this.l = l

        this.rectangles = []

        this.index = 0
        while (this.index < num) {
            this.queueRectangle()
        }
    }
    queueRectangle() {

        if (this.index % 2 === 0) {
            const [width, height] = [this.l, this.m]

            this.rectangles.push(new Rectangle(this.left, this.top, width, height))
            this.left += width - this.m
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
        this.rectangles.forEach(rectangle => rectangle.rewards.forEach(reward => reward.draw(ctx)))
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