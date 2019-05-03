import { SVG_NS } from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.direction = 1
    this.vx = 1
    this.vy = 1
    this.reset()

    document.addEventListener("keydown", (event) => {
      if (event.key === this.start) {
        this.reset()
        this.ballStartMoving()
      }
    })
  }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
  }

  ballStartMoving() {
    this.vy = Math.floor(Math.random() * 10 - 5);
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallBounce() {
    const hitTop = this.y - this.radius <= 0
    const higtBottom = this.y + this.radius >= this.boardHeight

    const hitLeft = this.x - this.radius <= 0
    const higtRight = this.x + this.radius >= this.boardWidth

    if (hitLeft || hitRight) {
      this.vx = -this.vx
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy
    }
  }

  ballMovement() {
    this.x += this.vx;
    this.y += this.vy;
  }

  render(svg) {
    const circle = document.createElementNS(SVG_NS, 'circle')
    circle.setAttributeNS(null, "r", 8)
    circle.setAttributeNS(null, "cx", this.x)
    circle.setAttributeNS(null, "cy", this.y)
    circle.setAttributeNS(null, "fill", "#ffffff")

    svg.appendChild(circle)
  }

}
