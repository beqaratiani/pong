class Ball {
  constructor() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.xV = 5
    this.yV = 2
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI)
    ctx.fillStyle = '#d3d3d3'
    ctx.fill()
  }

  reset() {
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.xV = -5
    this.yV = Math.random() * 6
    this.xV = -5
  }

  hit() {
    this.xV *= -1
  }

  update() {
    if (this.x - 10 < 0) {
      p2++
      this.reset()
    }
    if (this.x + 10 > canvas.width) {
      p1++
      this.reset()
    }
    if (this.x + 10 > canvas.width || this.x - 10 < 0) {
      this.xV *= -1
    }
    if (this.y + 10 > canvas.height || this.y - 10 < 0) {
      this.yV *= -1
    }
    this.x += this.xV
    this.y += this.yV

    if (ball.x - 10 == player1.x + player1.width) {
      if (player1.y <= ball.y - 10) {
        if (player1.y + player1.height >= ball.y + 15) {
          this.hit()
        }
      }
    }
    if (ball.x + 10 == player2.x) {
      if (player2.y <= ball.y - 10) {
        if (player2.y + player1.height >= ball.y + 10) {
          this.hit()
        }
      }
    }
  }
}
