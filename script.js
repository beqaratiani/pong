let p1 = 0,
  p2 = 0
let prevRender = 0
const FPS = 120
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'black'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const main = (currentTime) => {
  window.requestAnimationFrame(main)
  const delta = (currentTime - prevRender) / 1000
  if (delta < 1 / FPS) {
    return
  }
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  update()
  draw()
  prevRender = currentTime
}
window.requestAnimationFrame(main)

const ball = new Ball()
const player1 = new Paddle()
const player2 = new Paddle(true)

canvas.addEventListener('mousemove', (e) => {
  if (
    e.clientY > player1.height / 2 &&
    e.clientY < canvas.height - player1.height / 2
  ) {
    player1.y = e.clientY - player1.height / 2
    player1.y = e.clientY - player1.height / 2
  }
})

function update() {
  hit()
  player2.update()
  ball.update()
}
function draw() {
  ctx.fillStyle = 'white'
  ctx.font = '32px Arial'
  ctx.fillText(p1, canvas.width / 2 - 30, 50)
  ctx.fillStyle = 'white'
  ctx.font = '32px Arial'
  ctx.fillText(p2, canvas.width / 2 + 30, 50)
  ball.draw()
  player1.draw()
  player2.draw()
}
function hit() {}
