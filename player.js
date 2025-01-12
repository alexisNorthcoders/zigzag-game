class Player {
    constructor(x, y, radius, speed = 2) {
        this.x = x
        this.y = y
        this.radius = radius
        this.direction = "right"
        this.speed = speed
        this.trail = [];
        this.score = 0
        this.restartObj = {
            x,
            y,
            radius,
            speed,
            direction: "right",
            score: 0
        }
    }
    draw(ctx) {

        this.trail.forEach((point, index) => {
            const alpha = (index + 1) / this.trail.length;
            ctx.beginPath();
            ctx.arc(point.x, point.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 100, 100, ${alpha})`;
            ctx.fill();
        });

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = "black"
        ctx.fill()

        const eyeOffset = this.radius / 2;
        const eyeSize = this.radius / 5;

        ctx.fillStyle = "yellow";
        if (this.direction === "right") {

            ctx.beginPath();
            ctx.arc(this.x + eyeOffset, this.y - eyeOffset / 2, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.x + eyeOffset, this.y + eyeOffset / 2, eyeSize, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.direction === "down") {

            ctx.beginPath();
            ctx.arc(this.x - eyeOffset / 2, this.y + eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(this.x + eyeOffset / 2, this.y + eyeOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    move() {

        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 3 * this.speed) {
            this.trail.shift();
        }

        switch (this.direction) {
            case "right":
                this.x += this.speed
                break
            default:
                this.y += this.speed
                break
        }
    }
    changeDirection() {
        this.direction = this.direction === "right" ? "down" : "right"
    }
    gameover() {
        if (gameOver) {
            postScore(this.score)
        }
    }
    reset() {
        const { x, y, radius, direction, speed, score } = this.restartObj
        this.x = x
        this.y = y
        this.radius = radius
        this.direction = direction
        this.speed = speed
        this.score = score
    }
}