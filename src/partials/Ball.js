import { SVG_Ns } from '../settings'

export default class Ball {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.boardElement = document.querySelector('svg')
    }
    render() {
        let rect = document.createElementNS('rect');
        rect.setAttributeNS(null, "width", this.width);
        rect.setAttributeNS(null, "height", this.height);
        this.boardElement.appendChild(svg)
        let line = document.createElementNS('line');
        line.setAttributeNS(null, "x1", 256);
        line.setAttributeNS(null, "x2", 256);
        line.setAttributeNS(null, "y2", 256);
        line.setAttributeNS(null, "stroke", "white");
        line.setAttributeNS(null, "stroke-width", 4);
        line.setAttributeNS(null, "stroke-dasharray", 7);
        svg.appendChild(rect)
        svg.appendChild(line)
    }
}
