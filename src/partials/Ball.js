import { SVG_NS } from '../settings'

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius
    this.boardWidth = boardWidth
    this.boardHeight = boardHeight
    this.direction = 1
    this.vx = 5
    this.vy = 5
    this.reset()

    document.addEventListener("keydown", (event) => {
      if (event.key === this.start) {
        this.reset()
        this.ballStartMoving()
      }
    })
  }


  // set starting position and allow ball to move

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
  }

  ballStartMoving() {
    this.vy = Math.floor(Math.random() * 10 - 5);
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  ballMovement() {
    this.x += this.vx;
    this.y += this.vy;
  }


  // allow ball to bounce off walls

  wallBounce() {
    const hitTop = this.y - this.radius <= 0
    const hitBottom = this.y + this.radius >= this.boardHeight

    const hitLeft = this.x - this.radius <= 0
    const hitRight = this.x + this.radius >= this.boardWidth

    if (hitLeft || hitRight) {
      this.vx = -this.vx
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy
    }
  }

  // render the ball to the board
  render(svg) {
    const circle = document.createElementNS(SVG_NS, 'circle')
    circle.setAttributeNS(null, "r", 8)
    circle.setAttributeNS(null, "cx", this.x)
    circle.setAttributeNS(null, "cy", this.y)
    circle.setAttributeNS(null, "fill", "#ffffff")

    svg.appendChild(circle)
  }

}
