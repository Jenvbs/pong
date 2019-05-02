import { SVG_NS, KEYS } from '../settings'

export default class Paddle {
  constructor(boardHeight, width, height, x, y, moveUpKey, moveDownKey) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
    this.moveUpKey = moveUpKey
    this.moveDownKey = moveDownKey


    document.addEventListener("keydown", (event) => {
      if (event.key === this.moveUpKey) {
        this.up()
      } else if (event.key === this.moveDownKey)
        this.down()
    })
  }

  up() {
    this.y = Math.max(0, this.y - this.speed)
  }

  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed)
  }





  render(svg) {
    const rect = document.createElementNS(SVG_NS, 'rect')
    rect.setAttributeNS(null, "width", this.width)
    rect.setAttributeNS(null, "height", this.height)
    rect.setAttributeNS(null, "x", this.x)
    rect.setAttributeNS(null, "y", this.y)
    rect.setAttributeNS(null, "fill", "#ffffff")

    svg.appendChild(rect)
  }
}





