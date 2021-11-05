class Paddle {
  constructor(isright) {
    this.isright = isright
    this.width = 20
    this.height = 100
    if (isright) {
      this.x = canvas.width - this.width - 5
      this.y = canvas.height / 2 - this.height / 2
    } else {
      this.x = 5
      this.y = canvas.height / 2 - this.height / 2
    }
  }

  draw() {
    ctx.fillStyle = '#d3d3d3'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  update() {
    if (this.isright) {
      if (ball.y + this.height / 2 < canvas.height) {
        this.y = ball.y - this.height / 2
      }
      if (ball.y - this.height / 2 < 0) {
        this.y = 0
      }
    }
  }
}
