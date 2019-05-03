import { SVG_NS, KEYS } from '../settings'
import Board from './Board'
import Ball from './Ball'
import Paddle from './Paddle'

export default class Game {
  constructor(elementID, width, height) {
    this.elementID = elementID
    this.width = width
    this.height = height

    this.paddleWidth = 8
    this.paddleHeight = 56
    this.boardGap = 10

    this.gameElement = document.getElementById(elementID)

    this.board = new Board(this.width, this.height)

    this.ball = new Ball(8, this.width, this.height)

    this.paddle = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      KEYS.a,
      KEYS.z
    )

    this.paddleTwo = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.boardGap - this.paddleWidth,
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down
    )
  }

  render() {
    //clearing all child elements inside game element on every render
    this.gameElement.innerHTML = ''
    //create svg
    let svg = document.createElementNS(SVG_NS, "svg")
    svg.setAttributeNS(null, "width", this.width)
    svg.setAttributeNS(null, "height", this.height)
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`)
    this.gameElement.appendChild(svg)


    // render stuff
    this.board.render(svg)
    this.ball.render(svg)
    this.ball.ballMovement()
    this.paddle.render(svg)
    this.paddleTwo.render(svg)
  }
}
